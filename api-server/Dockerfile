# Base on offical Node.js Alpine image
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /usr/app

RUN npm install --global pm2

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

# Build app
RUN yarn build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

