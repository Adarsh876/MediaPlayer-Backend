// import json-server library in index.js file
const jsonServer = require('json-server')

// create json-server
const mediaPlayerServer = jsonServer.create()

// CREATE PATH TO JSON FILE
const router = jsonServer.router('db.json')

// middleware to convert json to js

const middleware =  jsonServer.defaults()

// use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// setup port for running server
const port = 5000 || process.env.port

// listen server for resolving request from client 
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer stsrted at ${port} and waiting for the request`);
})