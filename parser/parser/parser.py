import os

import requests
from apscheduler.schedulers.background import BackgroundScheduler
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from flask import Flask

load_dotenv()


JWT_TOKEN = str(os.environ.get("JWT_TOKEN"))

app = Flask(__name__)


def fetch_data(url):
    response = requests.get(url)
    if response.status_code != 200:
        return None
    return response.text


def parse_html(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    people_data = []
    entries = soup.find_all("tr", class_=lambda x: x and "views-row" in x)
    for entry in entries:
        tds = entry.find_all("td")
        if len(tds) >= 3:
            person = {}
            person["Name"] = tds[0].get_text(strip=True)
            dob_element = tds[1].find("span", {"property": "dc:date"})
            person["Date of Birth"] = (
                dob_element.get_text(strip=True) if dob_element else "N/A"
            )
            details = tds[1].get_text()
            race_start = details.find("Race:") + 5
            sex_start = details.find("Sex:") + 4
            race_end = details.find("Sex:")
            sex_end = details.find("DOB:", sex_start)
            person["Race"] = (
                details[race_start:race_end].strip() if race_start != 4 else "N/A"
            )
            person["Sex"] = (
                details[sex_start:sex_end].strip() if sex_start != 3 else "N/A"
            )
            person["Contact"] = tds[2].get_text(strip=True)
            people_data.append(person)
    return people_data


def scheduled_job():
    url = "https://oag.ca.gov/missing/search"
    html_content = fetch_data(url)
    if html_content:
        people_data = parse_html(html_content)
        headers = {"Authorization": f"Bearer {JWT_TOKEN}"}
        for person in people_data:
            data = {
                "title": person["Name"],
                "body": f"{person['Date of Birth']} {person['Race']} {person['Sex']} {person['Date of Birth']}",
                "creator_contact_information": person["Contact"],
            }
            response = requests.post(
                "http://198.46.226.156/api/v1/posts/create/", headers=headers, json=data
            )
            print(response.text)


def start_scheduler():
    scheduler = BackgroundScheduler(daemon=True)
    scheduler.add_job(scheduled_job, "cron", hour=7)
    scheduler.start()


@app.before_first_request
def initialize_scheduler():
    start_scheduler()


@app.route("/")
def home():
    return "Scheduler has been started."


if __name__ == "__main__":
    app.run(debug=True)
