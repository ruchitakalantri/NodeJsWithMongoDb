const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/' , (req, res, next) => { 
    //__dirname : hold absolute path for this project folder : routes folder
    // path join : Join all arguments together
    res.sendFile(path.join(rootDir, 'views' , 'user.html')); //Transfer the file at the given path.
});

module.exports = router;