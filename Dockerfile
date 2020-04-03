FROM node:11

WORKDIR /gps-usagers-admin

COPY ./package.json ./
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/
RUN npm config set proxy http://conception:30n35pt90N@proxycalvados.cg14.ad14.int:8080
RUN npm config set https-proxy http://conception:30n35pt90N@proxycalvados.cg14.ad14.int:2121
RUN npm install -g yarn
RUN yarn config set proxy http://conception:30n35pt90N@proxycalvados.cg14.ad14.int:8080
RUN yarn config set https-proxy http://conception:30n35pt90N@proxycalvados.cg14.ad14.int:2121

RUN yarn

COPY ./packages/server/dist ./packages/server/dist/
COPY ./packages/common/dist ./packages/common/dist/
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./packages/server/.env.example ./packages/server/
COPY ./ormconfig.json .

WORKDIR /gps-usagers-admin/packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "dist/server/src/index.js"]