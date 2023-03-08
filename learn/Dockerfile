FROM node:lts-alpine

ARG Port=3000

ENV NODE_ENV=production PORT=${Port}

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && mv node_modules ../

COPY . .

EXPOSE $PORT
#RUN chown -R node /usr/src/app
#USER node
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]
