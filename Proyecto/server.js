// importaciones ----------------------------
import express from 'express';//express server
import session from 'express-session';//sessions user

import MongoStore from 'connect-mongo';

import passport from 'passport';
import initializePassport from './config/passport.config.js';
/*import storage from 'session-file-store';
const FileStorage = storage(session); */

import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import viewsRouter from './routers/views.router.js';
import sessionsRouter from './routers/sessions.router.js';
import usersRouter from './routers/users.router.js';
import productsRouter from './routers/products.router.js';


//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//session user
app.use(session({
    secret: "Sessi0n",
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://toximosi:Quier0Entrar@cluster0.qnf87ai.mongodb.net/MongoDB?retryWrites=true&w=majority`,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 60
    }),
    resave: false,
    saveUninitialized: false,
}));
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

app.engine('handlebars', handlebars.engine({
  extname: 'handlebars',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
/* handlebars.registerPartial({
  nav: partial,
  footer: partial
}); */
//motor de views -> plantillas 
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Routes ----------------------------
//Views
app.use('/', viewsRouter );
/* handlebars.registerPartial('nav'); */
//Routes Data
app.use('/api/sessions', sessionsRouter);
app.use('/api/products', productsRouter );
app.use('/api/users', usersRouter );
