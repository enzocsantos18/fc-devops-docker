# Getting base image
FROM nginx:latest

# Setting the directory to work on when container starts
WORKDIR /app

# Running commands on linux machine
RUN apt-get update && \ 
    apt-get install vim -y

# Copying directory html to container folder
COPY html/ /usr/share/nginx/html

# To generate first docker image you need to run docker build -t {name/imageName} {path}