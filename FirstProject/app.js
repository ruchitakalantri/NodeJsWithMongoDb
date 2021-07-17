// root file for node js application
// create server in node js

// core modules
// look for local file
const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

//requestListener
// node will excute this function for every incoming request
//function rqListener(req, res) {}
//function createServer(requestListener?: http.RequestListener): http.Server (+1 overload)
//http.createServer(rqListener);

// or ananomous func .. event driven architecture
// http.createServer(functionnn(req,res) {})

// or next gen java script .. use arrow function
// http.createServer((req,res) => {})

// it return server
// const server = http.createServer((req,res) => {
//     console.log(req.url , req.method , req.headers);
   
// });

const server = http.createServer(routes.handler);

// lisen request
//(method) Server.listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server (+8 overloads)
server.listen(3030);