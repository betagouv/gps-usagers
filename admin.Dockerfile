FROM node:11

WORKDIR /gps-usagers-admin

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
COPY ./packages/admin/package.json ./packages/admin/
COPY ./packages/controller/package.json ./packages/controller/
COPY ./packages/common/package.json ./packages/common/
RUN npm install -g yarn
RUN yarn install
COPY ./packages/admin/public ./packages/admin/public
COPY ./packages/admin/src ./packages/admin/src
COPY ./packages/admin/.env.production ./packages/admin/.env
COPY ./packages/admin/tsconfig.json ./packages/admin/tsconfig.json
COPY ./packages/admin/tsconfig.prod.json ./packages/admin/tsconfig.prod.json
COPY ./packages/admin/tslint.json ./packages/admin/tslint.json
COPY ./packages/ui/dist ./packages/ui/dist/
COPY ./packages/controller/dist ./packages/controller/dist/
COPY ./packages/common/dist ./packages/common/dist/
WORKDIR /gps-usagers-admin/packages/admin
ENV NODE_ENV production
EXPOSE 4500
RUN yarn build
RUN yarn global add serve
COPY ./packages/admin/build ./
CMD ["serve", "-p", "5000", "-s", "."]