'use strict';

const log = require('./log-util')();

var id = 0;

/**
 * 生成自增id
 */
function generateId() {
    id++;
    return 'p' + id;
}

/**
 * 构造函数
 * @param {*} name 
 * @param {*} company 
 * @param {*} price 
 */
function Product(name, company, price) {
    this.id = generateId();
    this.name = name;
    this.company = company;
    this.price = price;
}

var products = [new Product('iphone7', "Apple", 6800), new Product('mi6', 'XiaoMi', 2399), new Product('imoo', 'BBK', 1699)];

module.exports = {
    getProducts: () => {
        return products;
    },

    getProduct: (id) => {
        return products.find((element, index, arr) => {
            return element.id == id;
        });
    },

    createProduct: (name, company, price) => {
        var product = new Product(name, company, price);
        products.push(product);
        return product;
    },

    deleteProduct: (id) => {
        var flag = -1;
        for (var index = 0; index < products.length; index++) {
            var element = products[index];
            if (element.id === id) {
                flag = index;
                return;
            }
        }

        if (flag != -1) {
            return products.splice(flag, 1)[0];
        }
        return null;
    }
}