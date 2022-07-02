/* Importaciones -----------------------------*/
const fs = require('fs');
const { Z_FIXED } = require('zlib');


/* Code -----------------------------*/
//variables
let file = 'src/files/productos.txt';
//Clase

class Contenedor{
 //metodos -----------------------------------
    //lee el archivo enviado
    /* read(file){
        try{
            let content = await fs.promise.readFile(file, 'utf-8');
            let objeto = JSON.parse(content);//transforma el contenido en JSON
            return objeto;
        }catch(err){
            console.log(`🚩 ${err}`);
            return 'null';
        }
    } */
    //obtener todos los datos del archivo
    getAll = async() => {
        try{
            if(fs.existsSync(file)){
                let d = await fs.promises.readFile(file, 'utf-8');
                let o = JSON.parse(d);//los datos son string, lo transformamos en json.
                return o;
            }else{
                return [];//no existe el archivo, pasamos un arreglo vacio.
            }       
        }catch(err){
            console.log(`🚩 Can not read file: ${file}, error: ${err}`);
        }
    }
    //guardar información en el archivo.
    save = async(o) =>{
        try{
            let os = await this.getAll();
            if(os.length === 0){//0 quiere decir que el archivo esta vacio
                o.id=1;
                os.push(o);
                await fs.promise.writeFile(file,JSON.stringify(os, null, '\t'));
            }else{
                let last = getLastId();
                o.id = (os[last].id) + 1;
                os.push(o);
                await fs.promise.writeFile(file, JSON.stringify(os, null, '\t'));
            }
        }catch(err){
            console.log(`🚩 Can not write file: ${file}, error: ${err}`);
        }
    }
    //obtener el último id
    getLastId = async() =>{
        try{
            let os = await this.getAll();
            let nowId =0;
                if(os.length>0){
                    os.forEach(e => {
                        if(nowId < e.id){
                            nowId = e.id;
                        }else{
                            nowId = e.id + 1;
                        }
                    });
                }
            return nowId;
            
        }catch(err){
            console.log(`🚩 Can not get last id in file: ${file}, error: ${err}`);
        }
    }

    getById = async(number)=>{
        try{
            let os = await getAll();
            os.forEach((e)=>{
                if(e.id === number){
                    return e;
                }else{
                    console.log('no hay coincidencia');
                }
            });    
        }catch(err){
            console.log(`🚩 Can not find id element of file: ${file}, error: ${err}`);
        }
    }


    }
    

producto = {
    title: 'producto01',
    price: '00',
    thumbnail: 'https://images.unsplash.com/photo-1656660364352-3a504c39bde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}
