FROM node:12-alpine

RUN mkdir -p /home/node/app/react-eportfolio/node_modules && chown -R node:node /home/node/app/react-eportfolio

WORKDIR /home/node/app/react-eportfolio

COPY package*.json ./

USER root

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "npx", "serve", "-s", "build", "-l", "8080" ]
