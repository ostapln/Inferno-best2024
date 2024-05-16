# Базовий образ
FROM node:16-alpine as build

# Встановлення робочої директорії
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package.json package-lock.json ./

# Встановлення залежностей
RUN npm install

# Копіювання решти файлів проекту
COPY . .

# Запуск збірки проекту
RUN npm run build

# Базовий образ для запущеного контейнера
FROM node:16-alpine

# Встановлення робочої директорії
WORKDIR /app

# Встановлення залежностей для продакшн середовища
COPY package.json package-lock.json ./
RUN npm install --production

# Копіювання зібраних файлів з попереднього етапу
COPY --from=build /app/dist ./dist

# Відкриття порту
EXPOSE 3000

# Запуск сервера
CMD ["npm", "run", "preview"]
