FROM node:10

RUN apt-get update -y; apt-get install libpcap-dev -y
COPY . /usr/src/app
WORKDIR /usr/src/app/miner
RUN npm install
WORKDIR /usr/src/app/api
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
