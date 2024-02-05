FROM node:18.12.1-alpine

WORKDIR /githubaction/

COPY . /githubaction/

RUN npm install

EXPOSE 80

CMD ["npm","start"]