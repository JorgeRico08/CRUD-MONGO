const mongoose = require('mongoose')
const Schema = mongoose.Schema

const datosSchema = new Schema ({   
usuario:String,
contraceña: String,
gmail: String,
nombre: String,
apePaterno: String,
apeMaterno: String,
curp: String,
domicilio: String,
colonia: String,
ciudad: String,
telefono: Number,
fechaRegistro: String,
}, {versionKey:false})

module.exports = mongoose.model('datos', datosSchema)

