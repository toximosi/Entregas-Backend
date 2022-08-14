// importaciones ----------------------------
import express from 'express';//express server
import __dirname from './utils.js';//static files
//wiews
import handlebars from 'express-handlebars';//motor de plantillas
import viewsRouter from './routers/views.router.js';
//routers
import productsRouter from './routers/products.router.js';
import cartsRouter from './routers/carts.router.js';
import loginRouter from './routers/login.router.js';
//middlewares
import isAdmin from './middlewares/admin.js';


//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});//servidor de http
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
//Views
app.use('/', viewsRouter);
/* app.use('/chats', viewsRouter); */

//CRUD
app.use('/api/login', loginRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter );