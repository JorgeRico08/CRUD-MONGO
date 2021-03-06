const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/dataUser'
mongoose.connect(url, {
  useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("┬íConectado a MongoDB!")
})
module.exports = db