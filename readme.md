# MQTT Authentication POC

## What is the purpose of this POC
- Experiment with [mosquitto-jwt-auth plugin](https://github.com/wiomoc/mosquitto-jwt-auth) to implement JWT authentication for MQTT broker

## Technologies used
- node.js
- mosquitto
- Docker

## Project setup
- Install Docker
- Install Docker Compose
- Install NPM

### Install packages

```bash
  npm install
```

### Service docker container

#### Docker compose

```bash
  docker compose -p mqtt-auth-poc up -d
```
```bash
  docker compose -p mqtt-auth-poc down
```

#### Docker commands

```bash
  docker build --platform linux/amd64 -t mqtt-auth-poc-mosquitto ./mosquitto/dockerfile/Dockerfile
```

```bash
  docker run --platform linux/amd64 -p 1883:1883 -p 1880:1880 -p 9001:9001 -v ./mosquitto/mosquitto.conf:/mosquitto/config/mosquitto.conf -v ./mosquitto/jwt_auth.so:/mosquitto/jwt_auth.so -v ./mosquitto/secrets/jwtRS256.der.pub:/mosquitto/secrets/jwtRS256.der.pub mqtt-auth-poc-mosquitto
```
