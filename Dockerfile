# syntax=docker/dockerfile:1

FROM node:18-alpine

ENV NODE_ENV=production
ENV PORT=8000

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]

EXPOSE 8000