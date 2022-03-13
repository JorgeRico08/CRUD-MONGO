const Dato = require('../model/data')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Dato.find({}, (error, datos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Erros datos del usuario'
            })
        }
        return res.render("index", {datos: datos})
    })
}