const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {//or use
    //console.log('another in the middleware');
    //res.send('<h1>Hello from Express!</h1>');
    console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
});
module.exports = router;