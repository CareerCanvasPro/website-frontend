FROM node:lts-alpine AS build

WORKDIR /root

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY tailwind.config.ts ./
COPY next.config.ts ./
COPY components.json ./
COPY lib lib
COPY components components
COPY app app

RUN npm run build

FROM build

ENV NODE_ENV=production

WORKDIR /home/node

COPY --from=build --chown=node:node /root/package.json ./
COPY --from=build --chown=node:node /root/node_modules node_modules
COPY --from=build --chown=node:node /root/.next .next

RUN npm prune

USER node

EXPOSE 3000

CMD [ "npm", "start" ]