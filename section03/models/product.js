//const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductsFromFile = (cb) => {
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            //return [];
            cb([]);
        }
        else {
        //return JSON.parse(fileContent);
        cb(JSON.parse(fileContent));
    }
    });

}
module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = this.description;
        this.price = price;
    }
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });
        //products.push(this);
        /*const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );*/
        //fs.readFile(p, (err, fileContent) => {
            //let products = [];
            //if (!err) {
            //    products = JSON.parse(fileContent);
            //}
            
            //console.log(fileContent);
       // });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
        //return products;
    }
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        })
    }
}