FROM node:14

ENV HOST
ENV USER
ENV PASSWORD
ENV DATABASE

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
