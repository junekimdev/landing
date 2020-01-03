.PHONY: all build up down clean

all: build

GIT_URL=https://github.com/JuneKimDev/landing.git
NAME=landing-page
TAG=1.0-alpine

build:
	docker build \
	--build-arg GIT_HASH=$(shell git ls-remote --heads $(GIT_URL) | cut -c 1-40) \
	-t junekimdev/$(NAME):$(TAG) .

up:
	@docker-compose up -d \
	&& sleep 5 \
	&& docker logs -t --tail 5 $(NAME)

down:
	docker-compose down

clean:
	docker rmi $(shell docker images -qf dangling=true)