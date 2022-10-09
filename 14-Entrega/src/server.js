// importaciones ----------------------------
import yargs from './config/yargs.config.js';
import config from './config/config.js';
import express from 'express';//express server
import session from 'express-session';//sessions user

import mongoose from 'mongoose';
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


//Server ------------------------------------
const app = express();
//const PORT = 8080;
//Variables entorno ---------------------------
const PORT = config.app.PORT||3000;
//const PORT = 8080;
const SECRET = config.app.SECRET;
const MONGO_URI = config.mongo.MONGO_URI;
const MONGO_USER = config.mongo.MONGO_USER;
const MONGO_PASS = config.mongo.MONGO_PASS;
const MONGO_DB = config.mongo.MONGO_DB;
//const MONGO_URL = config.mongo.MONGO_URL;
//---------------------------

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//session user
console.log('MONGO_URI');
console.log(MONGO_URI);
/* app.use(session({
    secret: SECRET,
    store: MongoStore.create({
        mongoUrl: MONGO_URI,
        mongoUrl: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}.wxdsjub.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
        mongoUrl: "mongodb+srv://toximosi:Quier0Entrar@cluster0.wxdsjub.mongodb.net/MongoBD?retryWrites=true&w=majority",
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 60
    }),
    resave: false,
    saveUninitialized: false,
})); */
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
app.use('/api/users', usersRouter );
