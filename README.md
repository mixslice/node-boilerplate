node-boilerplate
=====================

Node.js backend boilerplate with:

* Express;
* Unit test with [Jest](https://facebook.github.io/jest/);
* [Airbnb JavaScript Style](https://github.com/airbnb/javascript);
* Local development with Docker;

## Dependency
`Docker` and `docker-compose` is required. Follow [this link](https://docs.docker.com/engine/installation/) to get docker on your platform.

## Getting Started

Build the image:
```
make build
```

If you change the `Dockerfile` you will need to rebuild it.

Then install dependencies:
```
make install
```

Run server:
```
make start
open http://localhost:5000
```

Then go ahead and edit files inside `src`.

`nodemon` will watch your modifications and reload automatically. The reload time depends on your docker machine speed.


## Test

keep tests under `test` directory and run:

```
make test
```
