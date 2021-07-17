const http = require('http');

const express = require('express');

const app = express(); //Creates an Express application.


app.use((req, res, next) => { 

    console.log('in middleware!!!');
    next(); // allows the request to conntinue to the next middleware in line

} );//add new middlewarre function

app.use((req, res, next) => { 

    console.log('in another middleware!!!');
    res.send('<h1> Hello from express!!!</h1>');//Send a response.

});

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 