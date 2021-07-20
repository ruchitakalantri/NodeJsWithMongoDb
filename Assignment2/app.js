const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //Creates an Express application.

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//parser
app.use(bodyParser.urlencoded({extended : false})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

// serve file statically
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);

app.use(userRoutes);

app.use((req,res,next) => {
    // set my status node
    res.status(404).sendFile(path.join(__dirname ,'views' , '404.html'));
});

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 
