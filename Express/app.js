const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //Creates an Express application.

const errorController = require('./controllers/error');

app.set('view engine' , 'ejs');
app.set('views' , 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//parser
app.use(bodyParser.urlencoded({extended : false})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

// serve file statically
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin' , adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000); //Listen for connections.A node http.Server is returned, with this application (which is a Function) as its callback. 
