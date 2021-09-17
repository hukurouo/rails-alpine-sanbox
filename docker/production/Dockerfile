FROM ruby:3.0.2-alpine

ENV BUNDLE_WITHOUT development:test

WORKDIR /myapp
COPY Gemfile Gemfile.lock /myapp/
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
    sudo \
 && gem install bundler:2.0.2 \
 && bundle install \
 && yarn install --production --frozen-lockfile && yarn cache clean \
 && apk del --purge .build-dependencies

COPY . /myapp

# nginx
RUN groupadd nginx
RUN useradd -g nginx nginx
ADD docker/production/nginx.conf /etc/nginx/nginx.conf
ADD docker/production/entrypoint.sh /app/entrypoint.sh

EXPOSE 80

RUN chmod +x /app/entrypoint.sh