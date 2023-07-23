FROM node:16
WORKDIR /app
ENV NODE_ENV production

COPY package* .

RUN npm i
COPY src src

EXPOSE 3000
CMD [ "node", "src/index.mjs" ]
