const http = require('http');

const express = require('express');

const app = express(); //Creates an Express application.


app.use((req, res, next) => { 

    console.log('in middleware!!!');
    next();

} );//add new middlewarre function

app.use((req, res, next) => { 

    console.log('in another middleware!!!');

} );

const server = http.createServer(app);

server.listen(3000);