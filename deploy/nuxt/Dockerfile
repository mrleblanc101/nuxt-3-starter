ARG CI_REGISTRY_IMAGE

FROM ${CI_REGISTRY_IMAGE}/base:latest

COPY --chown=deploy:deploy . /app
WORKDIR /app

USER deploy

RUN yarn \
    && yarn run build

ENTRYPOINT ["yarn"]
CMD ["start"]
