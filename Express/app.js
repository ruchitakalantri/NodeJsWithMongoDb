const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express(); //Creates an Express application.

//parser
app.use(bodyParser.urlencoded({extended : false})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

app.use('/add-product' , (req, res, next) => { 
    res.send('<form action="/product" method = "POST"><input type ="text" name="title"> <button type = "submit"> Add Product </button></form>');//Send a response.
});

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');   
});

app.use('/' , (req, res, next) => { 
    res.send('<h1> Hello from express!!!</h1>');//Send a response.
});

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 
