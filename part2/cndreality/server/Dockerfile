FROM node:latest


RUN npm install -g json-server

WORKDIR /data
VOLUME /data

COPY ./run.sh /usr/bin/run.sh

RUN ls -ltra
RUN chmod +x /usr/bin/run.sh
# ENTRYPOINT ["bash", "/run.sh"]
EXPOSE 8081
ENTRYPOINT [ "run.sh" ]