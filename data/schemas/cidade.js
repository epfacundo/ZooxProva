let mongoose = require('mongoose');


let cidadeSchema = mongoose.Schema({
    nome: { type: String, required: false },
    estadoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado'
    },
    criadoEm: { type: Date, required: true, default: Date.now() },
    alteradoEm: { type: Date, required: false }
} 
,{ collection: 'cidadeCollection' }
);
module.exports = mongoose.model('Cidade', cidadeSchema);