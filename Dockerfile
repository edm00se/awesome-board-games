FROM node:alpine
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm install
COPY . .
RUN mv readme.md alt.md &&\
  SPACE=' ' &&\
  echo -e "---\nhome:${SPACE}true\nsidebar:${SPACE}true\n---" > readme.md &&\
  cat alt.md >> readme.md &&\
  rm alt.md
RUN npm run build
RUN mv docs/ /public
