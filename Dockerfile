FROM node:10-alpine

# Create app directory
WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
