# Microservices with Docker and Docker Compose

- This example has three microservices: an API gateway (microservice 1), an authentication service (microservice 2), and a service that provides a JSON (microservice 3). The request must be sent to microservice 1, then microservice 1 authenticates the request to microservice 2 and then forwards the request to microservice 3.
- There are two docker-compose files: the first orchestrates the containers from a NodeJS (docker-compose 1) image, the second builds images of each microservice (docker-compose 2).
- Dockerfile files are only required if you are using docker-compose 2.
