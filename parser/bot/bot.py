import logging
import os

import requests
from apscheduler.schedulers.background import BackgroundScheduler
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from telegram import Bot, Update
from telegram.ext import CallbackContext, CommandHandler, Dispatcher, Updater

load_dotenv()

app = Flask(__name__)
TELEGRAM_TOKEN = str(os.environ.get("TELEGRAM_BOT_TOKEN"))

bot = Bot(token=TELEGRAM_TOKEN)
updater = Updater(token=TELEGRAM_TOKEN, use_context=True)
dispatcher = updater.dispatcher

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)


def fetch_posts(update: Update, context: CallbackContext):
    headers = {"Authorization": f'Bearer {str(os.environ.get("JWT_TOKEN"))}'}
    response = requests.get("http://198.46.226.156/api/v1/posts/all/", headers=headers)
    if response.status_code == 200:
        posts = response.json().get("posts", [])
        messages = []
        for post in posts:
            message = (
                f"Title: {post['title']}\n"
                f"Body: {post['body']}\n"
                f"Region: {post['region']}\n"
                f"DetailInfo: {post['detailInfo']}\n"
                f"Email: {post['creatorEmail']}\n"
                f"Contact: {post['creatorContactInformation']}\n"
                f"Date Added: {post['dateAdded']}"
            )
            messages.append(message)
        text = "\n\n".join(messages)
        update.message.reply_text(text)
    else:
        update.message.reply_text("Failed to fetch posts.")


def start(update: Update, context: CallbackContext):
    update.message.reply_text("Hi! Use /fetch_posts to get the latest posts.")


def setup_dispatcher(dispatcher):
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("fetch_posts", fetch_posts))


setup_dispatcher(dispatcher)


@app.route("/")
def index():
    return "Hello, your bot is running!"


@app.route("/webhook", methods=["POST"])
def webhook():
    """Set a webhook for Telegram bot updates."""
    update = Update.de_json(request.get_json(force=True), bot)
    dispatcher.process_update(update)
    return "ok", 200


if __name__ == "__main__":
    updater.start_polling()
    app.run(debug=True)
