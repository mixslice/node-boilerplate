build:
	docker-compose build

start:
	docker-compose up

test1:
	docker-compose run --rm app npm test

test: test1

stop:
	docker-compose stop

kill: stop
	docker-compose rm
