// importaciones ----------------------------
import express from 'express';//express server
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routers/views.router.js';
import productsRouter from './routers/products.router.js';
import messagesRouter from './routers/messages.router.js';

//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//format od files json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//motor de views -> plantillas 
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes ----------------------------
app.use('/', viewsRouter );
app.use('/api/products', productsRouter );
app.use('/api/messages', messagesRouter );