//https://cse341tutorial.herokuapp.com/
//http-launch a server, send request, https-launch SSL server, fs, path, os
//const http = require('http');//import file in js ./localfile

//const routes = require('./routes');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
const errorController = require('./controllers/error');
const PORT = process.env.PORT || 3000 
const app = express();

/*app.engine('hbs', expressHbs({
    layoutsDir: 'section03/views/layouts/', 
    defaultLayout: 'main-layout', 
    extname: 'hbs'
}));
*/
//app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
app.set('views', 'section03/views');

const adminRoutes = require('./routes/admin');
//const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//const server = http.createServer(app);
/*app.use((req, res, next) => {
    console.log('in the middleware');
    next();//allows request to continue to next middleware

});
app.use((req, res, next) => {
    console.log('another in the middleware');
    res.send('<h1>Hello from Expess!</h1>');
    
});*/
/*
app.use('/', (req, res, next)=> {
    console.log('This always runs!');
    next();
});*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/admin', adminData.routes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
//app.use(express.json());
//app.use(express.urlencoded({
//    extended:false
//}));
/*
app.use('/add-product', (req, res, next) => {
    console.log('another in middleware');
    //res.send('<h1>The add product page</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    
});
app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');

});*/
/*
app.use('/', (req, res, next) => {
    console.log('another in the middleware');
    res.send('<h1>Hello from Express!</h1>');
    
});
*/
app.listen(PORT);
//const fs = require('fs');
//function rqListener(req, res) {
//}
//http.createServer(rqListener);
//or http.createServer(function(req, res) {
///
//})
//console.log(routes.someText);
//request response
//const server = http.createServer(routes) ;
//const server = http.createServer(routes.handler) ;
//const server = http.createServer((req, res) => {
    //console.log(req);
    //console.log(req.url, req.method, req.headers);
    //process.exit();
   // const url = req.url;
    //const method = req.method;
//});
//server.listen(3000);
