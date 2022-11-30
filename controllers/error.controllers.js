const express = require('express')
const { errorResponse } = require('../utils/api.utils')
const HTTP_STATUS = require('../constants/api.constants')
const error = express.Router()


error.get('/', (req, res) => {
    res.status(HTTP_STATUS.NOT_FOUND).send(errorResponse('No se puede devolver la ruta', 'La ruta no existe o fue modificada'))
})
module.exports = error