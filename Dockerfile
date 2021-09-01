# based on nodeJS v.14 alpine image
FROM node:14-alpine

LABEL maintainer="June Kim" version="1.0"

WORKDIR /app

# Add package files
COPY package.json yarn.lock ./

# Install deps
RUN set -eux \
  && apk update \
  && apk add --no-cache --virtual .build-deps \
  g++ \
  make \
  python \
  yarn \
  && yarn global add node-gyp \
  && yarn install \
  && apk del .build-deps

ARG GIT_HASH

ENV NODE_ENV=production \
  BUILD_ID=${GIT_HASH} \
  PUBLIC_URL=https://landing.junekim.xyz \
  GTAG_ID=GTM-TN5D5WZ

# Add all files
COPY ./ ./

# Build and clean up
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]