const { Router } = require('express')
const error = require('../controllers/error.controllers')
const errorRouter = Router()
errorRouter.use('/', error)
module.exports = errorRouter;
