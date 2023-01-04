FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install -ci

ADD . ./

COPY . .

CMD ["node", "main.js"]