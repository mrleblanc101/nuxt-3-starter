FROM docker.gitlab.libeo.com/sysadmins/docker/node:16

COPY --chown=deploy:deploy package.json /app/
COPY --chown=deploy:deploy yarn.lock /app/

ENV BUILD_DEPS \
    g++ \
    build-essential \
    git \
    python3

WORKDIR /app
USER root
RUN apt-get update \
    && apt-get install -y --no-install-recommends ${BUILD_DEPS} \
    && yarn \
    && yarn cache clean --all \
    && chown -R deploy:deploy /app \
    && apt-get remove -y ${BUILD_DEPS} \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
USER deploy
