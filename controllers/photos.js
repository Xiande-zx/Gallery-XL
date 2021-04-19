const photos = require('../models/photos')

exports.getAllPhotos = (req, res) => {
    // el controlador va a obtener todos los datos del modelo 'cats'
    const allPhoto = photos.findAll()

    res.render('pages/index', { photos: allPhoto, page_name: 'index' })
}

exports.getAddPhotos = (req, res) => {
    res.render('pages/add-photos', { page_name: 'add' })
}

exports.postAddPhotos = (req, res) => {
    // recibir los datos del POST
    const name = req.body.name
    const url = req.body.url
    const date = req.body.date

    if (!photos.exist(url)) {

        photos.addPhoto(name, url, date)
        // redirigir al cliente a la lista de gatos
        res.redirect('/photos')
    } else {
        // insertar el nuevo gato en la BBDD
        res.send("La Url ya existe en nuestro almacén, y por lo tanto, no lo podemos añadir")
    }

}