//const products = [];
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });

    });

};
exports.getProduct = (req, res, next) => {
const prodId =  req.params.productId;
Product.findById(prodId, product => {
    //console.log(product);
    res.render('shop/product-detail', {
        product: product, 
        pageTitle: product.title,
        path: '/products'});
});
};
exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',

        });

    });

};
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle:'Your cart',

    });

};
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });

}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
}
    //const products = Product.fetchAll();
    //console.log('another in the middleware');
    //res.send('<h1>Hello from Express!</h1>');
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); 
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //const products = adminData.products;
    //res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
