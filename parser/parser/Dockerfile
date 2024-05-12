FROM python:3.8-slim

WORKDIR /usr/src/app

COPY . .

RUN pip install --no-cache-dir flask requests bs4 APScheduler

EXPOSE 5000

ENV NAME World

CMD ["python", "parser.py"]
