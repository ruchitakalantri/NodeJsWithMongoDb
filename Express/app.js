const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //Creates an Express application.

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//parser
app.use(bodyParser.urlencoded({extended : false})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next) => {
    // set my status node
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 
