const express = require('express')
const multer = require('multer')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


const photosRoutes = require('./routes/photos')

app.use('/photos', photosRoutes)

/*app.get('/', (req, res) => {
    res.send('Bienvenido a la página Web de Gallery XL')
})*/

// MULTER
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './img');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  },
})

const upload = multer({storage : fileStorage})

app.post('/photos/add-photos', upload.single('image'), (req,res) => {
  console.log(req.file);
  res.send('file upload succes')
})

app.listen(3000)