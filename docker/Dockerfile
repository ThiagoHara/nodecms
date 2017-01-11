FROM ubuntu:16.04

MAINTAINER Thiago Hara <thiagomassamihara@gmail.com>
# Install app dependencies
RUN apt-get update && \
    apt-get -y install sudo && \
    apt-get -y install curl && \    
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get install --yes nodejs && \
    apt-get -y autoremove

# Install PM2
RUN npm install -g pm2

RUN mkdir -p /usr/src/app

# Define working directory
WORKDIR /usr/src/app

COPY ../ /usr/src/app

RUN npm install

#COPY docker-entrypoint.sh /
#ENTRYPOINT ["/docker-entrypoint.sh"]

# Expose port
EXPOSE 8080

# Run app
CMD ["pm2-docker", "process.yml"]