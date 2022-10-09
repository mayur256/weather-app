#!/bin/bash
# specify base image
FROM node:16

# specify the working directory for the container
WORKDIR /apps/weather_app

# copy both 'package.json' and 'package-lock.json' (if available) into CWD
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the CWD
COPY . .

# set port for the application container
EXPOSE 8080

# execute command to run app
CMD ["npm", "run", "dev", "--", "--port", "8080"]
