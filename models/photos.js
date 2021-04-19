const BBDD_photos = [
  {
    id: 1,
    name: 'photo1',
    url: 'https://i.picsum.photos/id/390/200/200.jpg?hmac=jO0I_KIqGlM283KrH_KN8THBmylOIRyiWbKAx8412Ss',
    date: '2021-04-19'
  },
  {
    id: 2,
    name: 'photo2',
    url: 'https://i.picsum.photos/id/989/200/200.jpg?hmac=YmaagsSArKDGDSeyRJ9aYRxKM6KdP49ZGYtyhLHlCcY',
    date: '2021-04-1'
  },
  {
    id: 3,
    name: 'photo3',
    url: 'https://i.picsum.photos/id/258/200/200.jpg?hmac=SRxBTuyYSeHtVooeEMwmQPB0yIF3fqnvrOBR7DJnOlM',
    date: '2021-04-30'
  }
]

const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_photos
}

exports.exist = (url) => {
    return BBDD_photos.some(photo => {
        return photo.url == url
    })
}

exports.addPhoto = (name, url, date, color) => {

    const newPhoto =
    {
        id: uuid.v1(),
        name: name,
        url: url,
        date: date,
        color: color
    }
    // El hecho de mantener en el modelo la manera que insertamos un nuevo registro en la BBDD; nos permite que si en el futuro nuestra BBDD cambia, solo tengamos que realizar las modificaciones en este fichero 
    
    // mongoDB.insert({name: name, race:race})
    BBDD_photos.push(newPhoto)
}
