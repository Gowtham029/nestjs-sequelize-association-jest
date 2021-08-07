#FROM node:14.15.3-apline
#WORKDIR /usr/src/api

#COPY dist/ .
#RUN npm i
#EXPOSE 3000
#CMD ["node", "index.js"]


# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

# Dvelopment build stage
# FROM common-build-stage as development-build-stage

# RUN chmod +x /app/docker-entrypoint.sh

# ENTRYPOINT [ "docker-entrypoint.sh" ]

# ENV NODE_ENV development

# CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
