// importaciones ----------------------------
import express from 'express';//express server
import session from 'express-session';//sessions user
/*import storage from 'session-file-store';
const FileStorage = storage(session); */
import MongoStore from 'connect-mongo';
import conexion from './conexion.js';

import __dirname from './utils.js';
import handlebars from 'express-handlebars';

import viewsRouter from './routers/views.router.js';
import registerRouter from './routers/register.router.js';
import cookiesRouter from './routers/cookies.router.js';
import productsRouter from './routers/products.router.js';
import messagesRouter from './routers/messages.router.js';
import usersRouter from './routers/users.router.js';


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
//session user
app.use(session({
    /* store: new FileStorage({
        path: './sessions',
        ttl: 60, //un minuto -> 60 segundos
        retries:0
    }), */
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://toximosi:Quier0Entrar@cluster0.wxdsjub.mongodb.net/MongoBD?retryWrites=true&w=majority`,
        ttl:600
    }),
    secret: "Sessi0n",
    resave: false,
    saveUninitialized: false,
}));
//motor de views -> plantillas 
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes ----------------------------
app.use('/', viewsRouter );
/* app.use('/api/register', registerRouter ); */
app.use('/api/users', usersRouter );
app.use('/api/cookies', cookiesRouter );
app.use('/api/products', productsRouter);
app.use('/api/messages', messagesRouter );