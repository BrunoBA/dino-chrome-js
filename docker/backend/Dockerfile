FROM node:8.16-alpine 

RUN apk update \
  && apk add --no-cache git \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm install -g @adonisjs/cli \
  && npm install -g typescript \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

WORKDIR /app/home

RUN npm install

EXPOSE 3000
EXPOSE 3333
EXPOSE 8000
EXPOSE 8080