FROM node:4.4

COPY src /opt/app


RUN apt-get update && \
	apt-get install -y nano



CMD ["node", "/opt/app/index.js"]
