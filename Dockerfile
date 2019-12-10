FROM node:12-alpine
LABEL maintainer="Justin Wright"

ADD . ./build
WORKDIR /build

ARG ENVIRONMENT=prod
RUN npm ci && npm run build

EXPOSE 3000
CMD npm run server
