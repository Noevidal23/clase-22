const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error.middleware')
const errorRouter = require('./router/error')
const fakeProducts = require('./router/fakeProduct')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', fakeProducts)
app.use('*', errorRouter)

app.use(errorMiddleware);

module.exports = app