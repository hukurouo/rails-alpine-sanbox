# install

~~~bash
git config --global core.autocrlf input # for windows
git clone https://github.com/hukurouo/rails-alpine-sandbox.git
~~~

# build

~~~
docker-compose build
docker-compose run --rm web rails db:setup
~~~