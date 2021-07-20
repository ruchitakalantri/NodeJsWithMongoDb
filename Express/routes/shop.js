const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

const express = require('express');


const router = express.Router();

router.get('/' , (req, res, next) => { 
    console.log(adminData.products);
    //__dirname : hold absolute path for this project folder : routes folder
    // path join : Join all arguments together
    res.sendFile(path.join(rootDir, 'views' , 'shop.html')); //Transfer the file at the given path.
});

module.exports = router;