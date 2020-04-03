FROM node:11

WORKDIR /gps-usagers-front

COPY ./package.json ./
COPY ./tslint.json ./
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
COPY ./packages/front/package.json ./packages/front/
COPY ./packages/controller/package.json ./packages/controller/
COPY ./packages/common/package.json ./packages/common/
RUN npm install -g yarn
RUN yarn install
COPY ./packages/front/public ./packages/front/public
COPY ./packages/front/src ./packages/front/src
COPY ./packages/front/.env.production ./packages/front/.env
COPY ./packages/front/tsconfig.json ./packages/front/tsconfig.json
COPY ./packages/front/tsconfig.prod.json ./packages/front/tsconfig.prod.json
COPY ./packages/front/tslint.json ./packages/front/tslint.json
COPY ./packages/ui/dist ./packages/ui/dist/
COPY ./packages/controller/dist ./packages/controller/dist/
COPY ./packages/common/dist ./packages/common/dist/
WORKDIR /gps-usagers-front/packages/front
ENV NODE_ENV production
EXPOSE 4000
RUN yarn build
RUN yarn global add serve
COPY ./packages/front/build ./
CMD ["serve", "-p", "5000", "-s", "."]