FROM node:16.15.0-alpine
WORKDIR /app/backend
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE $PORT
CMD [ "yarn", "start" ]
