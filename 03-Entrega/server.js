// importaciones ----------------------------
const fs = require('fs');
//express
const express = require('express');
let lista = './src/json/productos.json';
const productos = require(lista);
const Productos = require('./src/class/productos.js');
const productosService = new Productos();
const read = productosService.read;
const getById = productosService.getById;

//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor Http escuchado en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`));

//CODE ------------------------------
app.get ('/', (req, res)=>{
    res.send(
        menu()
    );
});
app.get('/productos',async(req, res)=>{
    res.send(
        await read(lista)
    );
    });
app.get('/productosRandom', async(req, res)=>{
    res.send(
        await mostrarProductoRandom(lista)
    );
});


const mostrarProductoRandom = async(obj) =>{
    if(fs.existsSync(obj)){
        let d = await fs.promises.readFile(obj,'utf8');
        let p = await JSON.parse(d);

   
        let limit = await p.length;
        let random = Math.floor((Math.random()*limit)+1);
        let product = await getById(obj, random); 
        console.log(product)


        return product

    }else{
        return [];
    }
    
    
}
mostrarProductoRandom(lista);

const menu = ()=>{
    return (`<h1>menu:</h1><br>
    <ul>
        <li><a href="/">inicio</a></li>
        <li><a href="/productos">productos</a></li>
        <li><a href="/productosRandom">Producto Random</a></li>
    </ul>`)
}
