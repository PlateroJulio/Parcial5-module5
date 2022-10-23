const {Schema, model} = require('mongoose')

const GuatemalaSchema = Schema(
    {
        codigo : {
            type : String,
            require : [true, 'Codigo Requerido']
        },
        nombreProyecto : {
            type : String,
            require : [true, 'Nombre del proyecto Requerido']
        },
        monto : {
            type : Number,
            require : [true, 'Monto Requerido']
        },
        fecha : {
            type : Date,
            require : [true, 'Fecha Requerido']
        }
    }
)

module.exports = model("Guatemala", GuatemalaSchema )