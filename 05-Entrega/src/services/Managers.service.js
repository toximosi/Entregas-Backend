//funciones estandar
//import----------------------
import * as fs from 'fs';
/* import __dirname from '../utils.js'; */


//Code------------------------
class Managers{
    
    constructor(){
/*         this.path = __dirname + '/files/pets.json'; */
    }

    //Metodos--------------------
    readFile = async(file)=>{ 
        try{
            if(fs.existsSync(file)){
                let data = await fs.promises.readFile(file, 'utf8');
                let p = JSON.parse(data);
                return p;
        }else{
            return [];
        }
    }catch(err){
        console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
    }}
    
    /* idIsNum = async(id)=>{
        if(isNaN(id)) {
            return id;
         }else{            
            console.log('🧟‍♂️ El parametro no es un número')
            return 'false';
        }
    } */
    //obtiene todos los elementos del archivo
    getAll = async(file)=>{
        let data = await this.readFile(file)
        return data;
    };

    getById = async(file, id)=>{
        try{
            let data = await this.readFile(file);
            let prod = "";

            data.forEach(e => {
                if(e.id == id){
                    prod = e; 
                }
            });
            return prod;

        }catch(err){
            console.log(`🚩 Can not find element by id: ${id},\n 💣 error: ${err}`);
        }
    }
    addId = async(file, obj) => {
        try{
            let Arr = await this.readFile(file);
            let idArr = [];
        
            Arr.forEach((e)=>{
                idArr.push(e.id);    
            })

            idArr = idArr.sort((a,b) => (a - b));
            let idAdd = idArr.lenght+1;
            let idLast =  Arr[Arr.lenght]
            
            if(idLast == idAdd){//coinciden
                idAdd++;
            }if (idLast > idAdd) {//entonces el elemento ha sido borrado
                idAdd = idLast++;
            }if (idLast < idAdd) {
                idAdd = idAdd;
            }

            return idAdd;

        }catch(err){

        } 
        
    }

    post = async(file, obj) =>{

    } 


    putById = () =>{

    }




};

//Export -------------------------
export default Managers;