# based on nodeJS v.12 alpine image
FROM node:12-alpine

LABEL maintainer="June Kim" version="1.0"

EXPOSE 3000

RUN set -eux \
  # Install deps
  && apk update \
  && apk add --no-cache --virtual .build-deps \
  g++ \
  make \
  python \
  git \
  # Install global node modules
  && npm i -g node-gyp

# Staging cache to detect any changes in source code
ARG GIT_HASH
RUN GIT_URL=https://github.com/JuneKimDev/landing.git \
  && echo "Building docker from COMMIT_ID: ${GIT_HASH}" \
  && git clone ${GIT_URL} \
  && cd landing \
  # Install node modules
  && npm i \
  && apk del .build-deps

ENV NODE_ENV=production \
  BUILD_ID=${GIT_HASH} \
  PUBLIC_URL=https://landing.junekim.xyz

WORKDIR /landing

RUN npm run build && npm prune

CMD npm start