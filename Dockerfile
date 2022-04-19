FROM 322926992319.dkr.ecr.us-east-1.amazonaws.com/docker/nodejs:10.15-alpine

ARG DEPLOY_ENV
ENV DEPLOY_ENV=$DEPLOY_ENV

ARG APP_ROOT='/courses'

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
ADD . $APP_ROOT

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "npm", "run", "start" ]
