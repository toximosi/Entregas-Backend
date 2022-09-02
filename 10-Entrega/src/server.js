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
const persistence = 'onlyMemory';


/* import('./onlyMemory/routers/products.router.cjs')
    .then((module) => { 
        console.log('hola');
    }) */
/* const productsRouter = module.router; */
        
// MEMORY, FILE, MONGODB

        // const productsRouter = await import('./onlyMemory/routers/products.router.js');
        import productsRouter from './onlyMemory/routers/products.router.js';
        //import cartsRouter from './onlyMemory/routers/carts.router.js';
    //'MEMORY':
        /* import(`./onlyMemory/routers/products.router.js`).then(module => productsRouter = module.fun()); */
        /* import cartsRouter from './onlyMemory/routers/carts.router.js'; */
    // 'FILE':
        /* import productsRouter from './onlyFile/routers/products.router.js';
        import cartsRouter from './onlyFile/routers/carts.router.js'; */
    
    // 'SQL':
    // SQULITE':
    
    // 'MONGO':
        /* import productsRouter from './onlyMongoDB/routers/products.router.js';
        import cartsRouter from './onlyMongoDB/routers/carts.router.js'; */
    
    // 'FIREBASE':


app.use('/api/products', productsRouter);
//app.use('/api/carts', cartsRouter);
//app.use('/api/chats', chastsRouter );