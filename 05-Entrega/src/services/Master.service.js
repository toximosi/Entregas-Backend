//funciones estandar
//import----------------------
import * as fs from 'fs';


//Code------------------------
class Master{
    
    constructor(){}

    //Metodos--------------------
    //obtiene todos los elementos del archivo
    getAll = async(file)=>{
        console.log('entro');
        try{
            if(fs.existsSync(file)){
                let data = await fs.promises.readFile(fike, 'utf8');
                let p = JSON.parse(data);
                return p;
            }else{
                console.log('entro');
                return [];
            }
        }catch(err){
            console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
        }
    };

    getById = ()=>{

    }



    putById = () =>{

    }




};

//Export -------------------------
export default Master;