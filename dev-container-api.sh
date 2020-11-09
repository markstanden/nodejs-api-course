#!/bin/bash
# A startup script for the development container:
# Don't forget to set it as executable first:
# > chmod 755 dev-container-web.sh

echo Building the container 'dev-container-api'
docker build -f ./api/Dockerfile.dev -t dev-container-api ./api

echo running the container and
echo attaching the $PWD as a volume mapped to /app
echo remove when finished
docker run -v $PWD/.:/app/.:z -p 127.0.0.1:5000:5000 --rm dev-container-api
