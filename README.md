# Міні-гайд до запуску проєкту 

Проект складається з двох основних частин: фронтенду, реалізованого на React, та бекенду, що базується на Django REST Framework (DRF). Для запуску проекту необхідно виконати ряд дій у відповідних директоріях.

frontend:
- перейдіть до папки frontend
- підніміть контейнер:
    ``` bash
    docker-compose up --build
    ```
проєкт буде доступний на порті 3000.

backend:
- перейдіть до папки backend
- підніміть контейнер:
    ``` bash
    docker-compose up --build
    ```
- створіть та заповніть файл .env 
```
SECRET_KEY= Your secret Django key

ADMIN_PATH=admin panel url path

ALLOWED_HOSTS=localhost,127.0.0.1(examples)

DEBUG= True/False

POSTGRES_DB= Your Postgres db name
POSTGRES_USER= Your Postgres db owners name
POSTGRES_PASSWORD= Your Postgres db owners password
POSTGRES_HOST= Your Postgres db host (127.0.0.1 for localhost)
POSTGRES_PORT=Your Postgres db port (5432 default)
```

проєкт буде доступний на localhost(80 port).