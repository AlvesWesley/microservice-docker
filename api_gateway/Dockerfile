# This file is only required if you want to create an image of this service.
# For example with the "docker-compose up --build" command using the docker-compose-alternative.yml file

FROM node:10.16-alpine
LABEL maintainer 'Wesley Alves'

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]