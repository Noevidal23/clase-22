const express = require('express')
const { successResponse } = require('../utils/api.utils')
const HTTP_STATUS = require('../constants/api.constants')
const createProducts = require('../service/fakeProducts.service')
const router = express.Router()
const productos = new createProducts()



router.get('/productos-test', (req, res) => {
    const products = productos.getProducts()
    const respuesta = successResponse(products)
    
    res.status(HTTP_STATUS.OK).send(respuesta)
})
module.exports = router 