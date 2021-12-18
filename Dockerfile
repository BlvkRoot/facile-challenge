FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.*json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]