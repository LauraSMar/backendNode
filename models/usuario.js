const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

  nombre :{
    type: String,
    require:true,

  },
  apellido: {
    type: String,
    require:true,

  },
  email:{
    type: String,
    require:true,
    unique:true

  },
  password:{
    type: String,
    require:true,
    

  },
  img:{
    type: String,
    

  },
  rol:{
    type: String,
    require:true,
    default:'USER_ROLE'

  },
  google:{
    type:Boolean,
    default:'false'

  }
  

});


/// Extracción del id y version por default que agrega Mongo

/* UsuarioSchema.method( 'toJSON', function(){
  const { __v, _id, ...Object} = this.toObject();
  Object.id = _id;
  return object;
}) */

module.exports = model('Usuario', UsuarioSchema);