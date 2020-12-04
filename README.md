To run a local mongo container use `docker run --name devmongo -p 27017:27017 -d mongo` to run mongo db and `npm start` after.

To run dockerized version run `docker-compose build and docker-compose up`

Kubernetes setup using eksctl, Found here: `https://github.com/weaveworks/eksctl`

cmd: `eksctl create cluster --name ZeroSlope-Node-MongoDB`
