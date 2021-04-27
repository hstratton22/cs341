//const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('another in middleware');
    //res.send('<h1>The add product page</h1>');
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {
        pageTitle: "Add Product", 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true, 
        activeAddProduct: true
    
    });
};
exports.postAddProduct = (req, res, next)=> {
    //console.log(req.body);
    //products.push({title: req.body.title})
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');

};
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop', 
            path:'/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
        
    });

    };
    //const products = Product.fetchAll();
    //console.log('another in the middleware');
    //res.send('<h1>Hello from Express!</h1>');
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //const products = adminData.products;
    //res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
    