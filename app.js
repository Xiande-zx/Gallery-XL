const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

const photosRoutes = require('./routes/photos')

app.use('/photos', photosRoutes)

app.get('/', (req, res) => {
    
    res.send('Bienvenido a la página Web de Gallery XL')
})

app.listen(3000)