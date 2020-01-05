# based on nodeJS v.12 alpine image
FROM node:12-alpine

LABEL maintainer="June Kim" version="1.0"

EXPOSE 3000

ARG GIT_HASH

WORKDIR /landing

# Add package files
ADD package* ./

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

ENV NODE_ENV=production \
  BUILD_ID=${GIT_HASH} \
  PUBLIC_URL=https://landing.junekim.xyz

# Add all files
ADD ./ ./

# Build and clean up
RUN npm run build && npm prune

CMD npm start