FROM node:16.19.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js

# DOCKERFILE => DOCKER IMAGE => direct: DOCKER CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: DOCKER CONTAINER