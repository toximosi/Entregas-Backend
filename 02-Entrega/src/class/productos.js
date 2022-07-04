/* Importaciones -----------------------------*/
const fs = require('fs');

/* Code --------------------------------------------------------------*/
//Clase
class Contenedor{ 
    constructor(){}
    //metodos -------------------------------------------------------
    //guardar información en el archivo.
        IdAdd = (o)=>{
            let oNew = new Array();
            let ind = 1;
            o.forEach(e => {
                if(e.hasOwnProperty("id") && (e.id !="")){
                    if(e.id!==ind){
                        e.id=ind;
                    }; 
                }else{
                    e.id=ind;
                }
                oNew.push(e);
                ind++;                
            });
            return oNew;
        }

    //crea y construlle el archivo
        start = async(file,o) =>{
            try{
                let oNew = this.IdAdd(o);//inclimos y ordenamos los id de los productos
                await fs.promises.writeFile(file,JSON.stringify(oNew, null, '\t'));
                /* this.note(`Archivo ${file} creado`); */
                /* this.m(this.getIdAdll(o)); */
            }catch(err){
                console.log(`🚩 Can not start file: ${file},\n 💣 error: ${err}`);
            }
        }

     //leer archivo
        read = async(file)=>{
            try{
                if(fs.existsSync(file)){
                    let d = await fs.promises.readFile(file,'utf8');
                    let p = JSON.parse(d);
                    return p;    
                }else{
                    return [];
                }
            }catch(err){
                console.log(`🚩 Can not read file: ${file},\n 💣 error: ${err}`);
            }
        }

    //guardar elemento
        save = async(file,o) =>{
            try{
                let oNew = await this.read(file);
                oNew.push(o);
                this.IdAdd(oNew);
                let objetLast = oNew.length-1;
                let idIncluido = oNew[objetLast].id;
                await fs.promises.writeFile(file, JSON.stringify(oNew, null, '\t'));
                /* this.m('id Nuevo del producto :' + idIncluido); */
                return idIncluido;
            }catch(err){ 
                console.log(`🚩 Can not save objet in file: ${file},\n  💣 error: ${err}`);
            }
        }
    //obtener elemento por Id
        getById = async(file,ind) => {
            try{
                let obj = await this.read(file);
                obj.forEach((e)=>{
                    if(e.id === ind ){
                        /* this.m("el producto buscado es:")*/
                        this.m(e) 
                        return e
                    }else{
                       /*  this.m('No existe producto con ese id'); */
                        return null;
                    }
                });
            }catch(err){ 
                console.log(`🚩 Can not find objet in file: ${file},\n  💣 error: ${err}`);
            }
        }
    //borrar archivo
        deleteAll = async(f) =>{
                try{
                    await fs.promises.unlink(f);
                }catch(err){
                    console.log(`🚩 Can not detete file: ${f},\n 💣 error: ${err}`);
                }
            }
    //obtener elemento por Id
        deleteById = async(file, ind) => {
            try{
                let obj = await this.read(file);
                let oNew= [];
                obj.forEach((e)=>{
                    if(e.id !== ind ){
                        oNew.push(e);
                    }
                });
                
                await this.start(file,oNew);
            }catch(err){ 
                console.log(`🚩 Can not find objet to delete in file: ${file},\n  💣 error: ${err}`);
            }
        }
    //Extras
        note = (txt)=>{
            console.log(txt);
            console.log('--------------------------------------');
        }
        m = (t)=>{
            console.log(t);
        }

    }
module.exports = Contenedor;