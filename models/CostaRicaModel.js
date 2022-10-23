const { Schema, model } = require('mongoose');

const CostaRicaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El Codigo es obligatorio']
    },
    nombreProyecto: {
        type: String,
        required: [true, 'El NombreProyecto es obligatorio'],

    },
    paisEjecuta: {
        type: String,
        required: [true, 'La PaisQueEjecuta es obligatoria'],
    },
    FechaCierre: {
        type: Date,
        required: [true, 'La FechaCierre es obligatoria'],
    },

});



module.exports = model( 'CostaRica', CostaRicaSchema );