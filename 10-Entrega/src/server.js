// importaciones ----------------------------
import 'dotenv/config';//variables de entorno
import express from 'express';//express server
import __dirname from './utils.js';//static files
import { Server } from 'socket.io';//


//wiews
import handlebars from 'express-handlebars';//motor de plantillas
import viewsRouter from './routers/views.router.js';
//routers
import productsRouter from './routers/products.router.js';
import chastsRouter from './routers/chatsBd.router.js';


//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});//servidor de http
const io = new Server(server);//servidor de socket,... de esta forma vive dentro de mi "servidor"

server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//formato de archivos
app.use(express.json())//informamos al servidor como se leen los datos
app.use(express.urlencoded({ extended: true }))

//motor de views -> plantillas 
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes ----------------------------

//CRUD
app.use('/api/products', productsRouter);
app.use('/api/chats', chastsRouter );
app.use('/api/carrito', chastsRouter );