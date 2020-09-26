FROM node:14-alpine

WORKDIR /inkohx/nodejs-onion-service/

COPY ./package.json .
COPY ./package-lock.json .
COPY ./src ./src

RUN npm ci

ENTRYPOINT [ "npm", "start" ]
