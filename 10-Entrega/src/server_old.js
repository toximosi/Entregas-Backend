//& importaciones ----------------------------
//import 'dotenv/config';//variables de entorno
import express from 'express';//express server
import __dirname from './utils.js';//static files

//& Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});//servidor de http
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//& formato de archivos -----------------------------------
app.use(express.json());//informamos al servidor como se leen los datos
app.use(express.urlencoded({ extended: true }));

//& Static files ------------------------------------
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

//& ROUTES -------------------------------------------
const persistence = 'FILE';
// MEMORY, FILE, MONGODB

switch (persistence) { 
    case 'MEMORY':
        //products
        import productsRouter from './onlyMemory/routers/products.router.js';
        //Carts
        import cartsRouter from './onlyMemory/routers/carts.router.js';
        //menssages
        //user
        break;
    
    case 'FILE':
        //products
        import productsRouter from './onlyFile/routers/products.router.js';
        //Carts
        import cartsRouter from './onlyFile/routers/carts.router.js';
        //menssages
        //user
        break;
    
    case 'SQL':
        //products
        //Carts
        //menssages
        //user
        break;
    
    case 'SQULITE':
        //products
        //Carts
        //menssages
        //user
        break;
    
    case 'MONGO':
        //products
        import productsRouter from './onlyMongoDB/routers/products.router.js';
        //Carts
        import cartsRouter from './onlyMongoDB/routers/carts.router.js';
        //menssages
        //user
        break;
    
    case 'FIREBASE':
        //products
        //Carts
        //menssages
        //user
        break;
};

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
//app.use('/api/chats', chastsRouter );
