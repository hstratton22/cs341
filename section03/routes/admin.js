const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();
const products = [];


router.get('/add-product', (req, res, next) => {
    console.log('another in middleware');
    //res.send('<h1>The add product page</h1>');
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
router.post('/add-product', (req, res, next)=> {
    //console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');

});
//module.exports = router;
exports.routes = router;
exports.products = products;
