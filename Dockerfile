FROM node:alpine
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm install
COPY . .
RUN npm run build
RUN mv docs/ /public
