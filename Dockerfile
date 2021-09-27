FROM node:14.14.0-alpine3.12
WORKDIR /usr/src/api

COPY dist/ .

RUN npm i --only=prod

EXPOSE 3000
CMD ["node", "index.js"]


# Common build stage
# FROM node:14.14.0-alpine3.12

# COPY . ./app

# WORKDIR /app

# RUN npm install --only=prod

# EXPOSE 3000

# # Production build stage
# # FROM common-build-stage as production-build-stage

# # Setting environment as prod
# ENV NODE_ENV production

# CMD ["npm", "run", "start"]

# docker tag local-image:tagname new-repo:tagname