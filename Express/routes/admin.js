const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET request
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST request
router.post('/add-product', (req, res, next) => {
    // add to product
    products.push({title : req.body.title});
  
  res.redirect('/');
});


exports.routes = router;
exports.products = products;
