//Saber si esta creado el archivo de base de datos con la información.
const fs = require('fs');

//Funciones generales creadas
const Fun = require('./src/misc/appCode.js');
const fun = new Fun();

//Var
const file = '../bd/bd.json'

class appCode{

    areBd = (file) =>{
        if(fs.existsSync(file)){
            console.log({"mensage": 'los productos iniciales están cargados'});
        }else{
            console.log({"mensage": 'los productos iniciales NO!!!!!! están cargados'})
        }
    }
}
