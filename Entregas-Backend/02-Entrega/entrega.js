/* Importaciones -----------------------------*/
const fs = require('fs');


/* Code -----------------------------*/

class Contenedor{

    constructor(file, id){
        this.file = file;
        this.id = id;

    }

    save=function(objet){
        
    }
    getById=function(number){
        if(id != "" ){
            return id;
        }else{
            return null;
        }
    }
    getAll=function(){

    }
    deleteById=function(number){

    }
    deleteAll=function(){

    }


}
let file = './productos.txt';
//------Manejo documento
//Escribir y crea documento
/* fs.writeFileSync(file, 'Hello Kitty'); */
//Actualizar
/* fs.appendFileSync(file,'que tal') */
//Leer 
/* let content = fs.readFileSync(file,'utf-8');
console.log(content); */
//Eliminar
/* fs.unlinkSync(file); */


producto = {
    title: 'producto01',
    price: '00',
    thumbnail: 'https://images.unsplash.com/photo-1656660364352-3a504c39bde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

fs.writeFile(file, 'inicio', (err)=>{
    if(err){
        console.log('error de escritura');
    }else{
        console.log(`Archivo "${file}" escrito`);
    }
});

fs.readFile(file,'utf8', 'inicio', (err,res)=>{
    if(err){
        console.log('error de lectura');
    }else{
        console.log(res);
    }
})