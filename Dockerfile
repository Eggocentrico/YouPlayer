FROM node:15.0.1-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

EXPOSE 3000
COPY . .

CMD [ "yarn", "dev" ]
