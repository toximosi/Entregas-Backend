//Importaciones -------------------------
//Node
import * as fs from 'fs';//para lectura de archivos

//CODE ----------------------------------

class appCode{
    constructor(){}

    //metodos ---------------------------

    //Include Id in element
    areBd = (file) =>{
        if(fs.existsSync(file)){
            console.log({"mensage": 'los productos iniciales están cargados'});
        }else{
            console.log({"mensage": 'los productos iniciales NO!!!!!! están cargados'})
            const bdNew = read(file);
        }
    }


    addAllId = async(obj)=>{
        try{
            let objNw = Array ();
            let id = 1;
            await obj.forEach(e => {
                if(e.hasOwnProperty('id') && (e.id = '')) if(e.id !== id) e.id = id;
                objNw.push(e);
                id++;
            });
            return objNw;
        }catch(err){
            console.log(`🚩 Can not add id: ${file},\n 💣 error: ${err}`);
        }
    }

    //lectura del archivo
    readFile = async(file) =>{
        try{
            if(fs.existsSync(file)){
                let r = await fs.promises.readFile(file, 'utf8');//recoge la información del archivo
                let e = await JSON.parse(r);//lo transforma en json
                return e;
            }else{
                console.log(`🚩 file: ${file},\n 💀 no exist`);
                return [];
            }
        }catch(err){
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
    }

    //incluir valores a la "base de datos"
    addBd = async(bd, obj) =>{
        try{
            await fs.promises.writeFile(bd, JSON.stringify(obj, null, '\t'))
            
        }catch(err){

        }
    }



}

//Exportar
export default appCode;