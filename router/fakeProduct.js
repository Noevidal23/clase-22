const { Router } = require('express')
const products = require('../controllers/fakeProducts.controller')
const fakeProduct = Router()
fakeProduct.use('/', products)
module.exports = fakeProduct;
