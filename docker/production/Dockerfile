FROM ruby:3.0.2-alpine

ENV BUNDLE_WITHOUT development:test

WORKDIR /app
ENV RAILS_ENV production
COPY Gemfile Gemfile.lock .
COPY package.json yarn.lock .

RUN apk add --no-cache -t .build-dependencies \
    alpine-sdk \
    build-base \
 && apk add --no-cache \
    bash \
    mysql-dev \
    nodejs \
    tzdata \
    yarn \
    nginx \
    openrc \
 && gem install bundler:2.0.2 \
 && bundle install \
 && yarn install --production --frozen-lockfile && yarn cache clean \
 && apk del --purge .build-dependencies

COPY . /app

# nginx
ADD docker/production/nginx.conf /etc/nginx/nginx.conf
ADD docker/production/entrypoint.sh /app/entrypoint.sh

# openrc preparation 
# ref: https://stackoverflow.com/questions/65627946
RUN openrc && touch /run/openrc/softlevel 

EXPOSE 80

RUN chmod +x /app/entrypoint.sh