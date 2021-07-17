const http = require('http');

const express = require('express');

const app = express(); //Creates an Express application.


app.use('/add-product' , (req, res, next) => { 
    console.log('In add product middleware!!!');
    res.send('<h1> Add product!!!</h1>');//Send a response.
});

app.use('/' , (req, res, next) => { 
    console.log('In middleware!!!');
    res.send('<h1> Hello from express!!!</h1>');//Send a response.
});

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 
