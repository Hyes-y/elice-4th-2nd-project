FROM node:16.14.2

ENV HOME=/home/elice/0

RUN apt-get update

COPY package.json package-lock.json yarn.lock $HOME/sample-project/

WORKDIR $HOME/sample-project

RUN yarn add --silent --progress=false

COPY . $HOME/sample-project

CMD ["yarn", "build"]