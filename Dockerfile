# syntax=docker/dockerfile:1

FROM node:17.4.0
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install --production
RUN yarn global add serve

COPY ./build ./build

CMD [ "serve", "-l", "3000", "-s", "build" ]