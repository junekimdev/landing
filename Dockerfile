# based on nodeJS v.12 alpine image
FROM node:12-alpine

LABEL maintainer="June Kim" version="1.0"

WORKDIR /landing

# Add package files
COPY package* ./

# Install deps
RUN set -eux \
  && apk update \
  && apk add --no-cache --virtual .build-deps \
  g++ \
  make \
  python \
  && npm i -g node-gyp \
  && npm i \
  && apk del .build-deps

ARG GIT_HASH

ENV NODE_ENV=production \
  BUILD_ID=${GIT_HASH} \
  PUBLIC_URL=https://landing.junekim.xyz \
  GTAG_ID=GTM-TN5D5WZ

# Add all files
COPY ./ ./

# Build and clean up
RUN npm run build && npm prune

EXPOSE 3000

CMD npm start