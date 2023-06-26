FROM eclipse-mosquitto:2.0.15-openssl AS build

# use the mosquitto image to keep the alpine version in sync
# https://github.com/eclipse/mosquitto/blob/master/docker/2.0-openssl/Dockerfile

RUN apk update
RUN apk upgrade
RUN apk add libgcc