FROM node:12.16.3-alpine3.10
COPY ./front /front
WORKDIR /front
RUN npm install
CMD npm start
EXPOSE 3000
