FROM  node:14.17.0

WORKDIR /var/app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm","start"]

