//Importaciones -------------------------
//Node
import * as fn from 'fn';

//CODE ----------------------------------

class Products{
    constructor(){}

    //metodos ---------------------------

    //lectura del archivo
    read = async(file) =>{
        try{
            if(fs.existsSync(file)){
                let r = await fs.promises.readFile(file, 'utf8');//recoge la información del archivo
                let e = await JSON.parse(r);//lo transforma en json
                return e
            }else{
                console.log(`🚩 file: ${file},\n 💀 no exist`);
                return [];
            }
        }catch(err){
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
    }









}

//Exportar
module.exports = Products;