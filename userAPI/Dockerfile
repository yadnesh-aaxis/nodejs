#$ docker run -d --restart=always -e DOMAIN=cluster --name user-api -p 3000:3000 user-api:1.0

FROM node:9.2.0
#docker build -t user-api:1.0 .
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY src /usr/src/app/src
RUN npm install

RUN ls -la /usr/src/app/src

ENV MONGODB_CONNECT=mongo-0.mongo:27017,mongo-1.mongo:27017,mongo-2.mongo:27017/users
ENV PORT=3000
EXPOSE 3000

CMD [ "node", "./src/server.js" ]
#CMD ["sh", "-c", "tail -f /dev/null"]