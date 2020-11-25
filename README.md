# Node.js Rest API
## Introduction
The objective of this project is to make a rest API using Express, Node.js and MongoDB as the database (Mongose for accesing it). We will implement only two functions, one push petition, for registering a new encounter between two devices and another, get petition, for getting all the encounters for a device.
The WS will be deployed using docker and docker-compose (to launch mongo+the ws).

# The WS
We start creating a new project:
```
npm init -y
```
Install the required packages:
```
npm install express mongoose
```
Eventhough we are going to use docker-compose to deploy everything at once, lets start launching the database to start building the WS:
```
mkdir data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```

## Some useful command for testing the WS (using curl)
Another alternative here is using Postman.

Testing the post call
```
curl http://localhost:5000/api/encounters -X POST -H "Content-Type: application/json" -d '{"deviceId1":"1","deviceId2":"3"}'
```
Testing the get call
```
curl http://192.168.2.250:5000/api/encounters/1
```
If we want to check the information in the mongo db database we can use MongoDB Compass

## Launching everything together
After writting the docker-compose.yml, we only need to execute `docker-compose up -d` to launch both containers.
