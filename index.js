const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor trabajando con normalidad en el puerto: ${PORT}`)
})
