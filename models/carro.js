var mongoose = require('mongoose');

var carroSchema = mongoose.Schema({

    marca: {
        type: String,
        //required: true
    },

    modelo: {
    	type: String,
    	//required:true
    },

    tipo: {
    	type: String,
    	//required: true
    },

    combustivel: {
        type: String,
        //required: true
    },

    preco: {
        type:String
    },

    opcionais: {
        type:[String]
    }
});

var Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;
