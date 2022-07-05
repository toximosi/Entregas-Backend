const fs = require('fs');
//importaciones  ------------------------
const { getEnvironmentData } = require('worker_threads');
const Productos = require('./class/productos.js');
//Services ---- productos
const productosService = new Productos();

const note = productosService.note;
const m = productosService.m;
const start = productosService.start;
const read = productosService.read;
const save = productosService.save;
const getById = productosService.getById;
const deleteById = productosService.deleteById;
const deleteAll = productosService.deleteAll;
//informacion json
const productoInicial = require('./json/productoInicial.json');
const productoNuevo = require('./json/productoNuevo.json');
//variables
let file = './files/productos.txt';
let fileCrear = './files/productosCrear.txt';
let fileNuevo  = './files/productoAnadidoNuevo.txt';


let productoAnadido = './json/productoNuevo.json';

let count = 0;


//CODE ----------------------------------------
const process = async() =>{
   
    note('Empieza el programa');
    await start(file, productoInicial);
    note('archivo creado en files > productos.txt');
    await start(fileCrear, productoInicial);
    note('archivo creado en files > productosCrear.txt');

    m('El archivo creado producto.txt, tiene el siquiente contenido');
    m('!se ha incluido a los productos un id único e identificativo');
    note(await read(file));
    
    m('Se ha añadido el siguiente producto:');
    m(await read(productoAnadido));
    let idNew =  await save(file, productoNuevo);
    m('\nid Nuevo del producto :' + idNew);
    note('producto añadido en productos.txt'); 
    
    await start(fileNuevo, productoInicial);
    await save(fileNuevo, productoNuevo);
    note('archivo creado en files > productoAnadidoNuevo.txt'); 

    m('buscamos el producto con id = 3');
    await getById(file, 3);
    note('producto buscado y encontrado');

    let prodNo = await getById(file, 20);
    note('producto buscado y NO encontrado');

    
    await deleteById(file, 4);
    note('producto buscado y borrado');
    
    
    await deleteAll(file, 20);
    note('todo borrado en el archivo productos.txt');
    note('para poder revisar las otras opciones, se peude comprobar en los archivos:  productosCrear.txt y productoAnadidoNuevo.txt');

};
//Activar codigo
process();





