let mongoose = require('mongoose');
//const mongoose = require('../../config/dbConnection');
//refatorar
let estadoSchema = mongoose.Schema({
    
    nome: { type: String, required: false },
    abreviacao: { type: String, required: false },
    criadoEm: { type: Date, required: false, default: Date.now()},
    alteradoEm: { type: Date, required: false },
}, { collection: 'estadoCollection' }
);
 
module.exports = mongoose.model('Estado', estadoSchema);
//module.exports = estadoSchema;