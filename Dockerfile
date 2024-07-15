# Vídeo de referência: https://www.youtube.com/watch?v=Bp2bU6fQcSo

FROM node:20-alpine3.19
WORKDIR /src
ADD package.json /src
RUN npm i --silent
ADD ./src
RUN npm run build
CMD npm run start