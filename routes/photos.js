const express = require('express')
const router = express.Router()

// Importamos el modelo que queremos usar
const photos = require('../models/photos')

// Importamos el controlador de fotos
const photosController = require('../controllers/photos')

router.get('/', photosController.getAllPhotos)

router.get('/add-photos', photosController.getAddPhotos)

router.post('/add-photos', photosController.postAddPhotos)

// Como estas rutas las quiero exportar a otras partes de la aplicación, las tengo que exponer
module.exports = router

