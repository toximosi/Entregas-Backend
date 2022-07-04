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


//variables
let file = './files/productos.txt';
let count = 0;
//Objeto inicial
productoInicial =[
            {
                title: 'product01', 
                price: 0.01, 
                thumbnail: 'image01', 
                id: 3,
            }, { 
                title: 'product02', 
                price: 0.02, 
                thumbnail: 'image02', 

            }, { 
                title: 'product03', 
                price: 0.03, 
                thumbnail: 'image03', 

            }
        ];

productoNuevo = { 
        title: 'product04', 
        price: 0.03, 
        thumbnail: 'image04', 
    };


//CODE ----------------------------------------
const process = async() =>{

    start(file, productoInicial);
    note('archivo creado');

    let idNew =  await save(file,productoNuevo);
    m('id Nuevo del producto :' + idNew);
    note('producto añadido');    
    
    
    
    m('el producto es:');
    let prodOk = await getById(file, 3);
    m(prodOk); //No se porque no se muestra, no se si es por causa del sincronismo
    note('producto buscado y encontrado');

    let prodNo = await getById(file, 20);
    note('producto buscado y NO encontrado');

    await deleteById(file, 4);
    note('producto buscado y borrado');
    
    
    /* await deleteAll(file, 20);
    note('todo borrado'); */


};
//Activar codigo
process();





