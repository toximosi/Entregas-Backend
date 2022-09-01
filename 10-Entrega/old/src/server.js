// importaciones ----------------------------
import 'dotenv/config';//variables de entorno
import express from 'express';//express server
import __dirname from './utils.js';//static files

//routers
import productsRouter from './routers/products.router.js';
import messagesRouter from './routers/messages.router.js';


//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`);
});//servidor de http
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//formato de archivos
app.use(express.json());//informamos al servidor como se leen los datos
app.use(express.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes ----------------------------
//CRUD
app.use('/api/products', productsRouter);
app.use('/api/chats', messagesRouter );
