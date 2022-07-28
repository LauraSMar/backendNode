const {response} = require('express');
const Usuario = require("../models/usuario");

const getUsuarios = async (req, res) =>{

 //  const usuarios = await Usuario.find(); /* Trae todo tal cual*/

 // Desestructurando campos 
   const usuarios = await Usuario.find({}, 'nombre apellido email role');

  res.json({
    ok: true,
    usuarios
});

}


const crearUsuario = async (req, res = response) =>{

  // console.log(req.body)

  const { email, nombre, apellido, password} = req.body;
  // creo una instancia de Usuario y le cargo los datos que recibo en el body

  try {

          const existeEmail = await Usuario.findOne({email});
          if( existeEmail){
             
             return  res.status(400).json({
                        ok:false,
                        msg:'Este email ya esta registrado'
                      })

          
        } else {

          const usuario = new Usuario( req.body);
          await usuario.save();
        
        
          return res.json({
            ok: true,
            usuario
        });


        }

    
  } catch (error) {

    console.log( error)
    res.status(500).json({
        ok:false,
        msg:'Error inesperado...Revise Logs'
    })
  }

 

}

module.exports = {
  getUsuarios,
  crearUsuario
}