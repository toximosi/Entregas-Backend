//import
import express from "express";
import __dirname from "./utils.js";
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';

//server
const app = express();
const PORT = 8080;
app.use(express.static(__dirname + 'public')); //static file
const server = app.listen(PORT, () => console.log('listenin on ' + PORT));

//Motor de plantillas -> Handlebars:
//!Recuerda que en la carpeta views, tiene que existir /layouts/main.handlebars!!!
app.engine('handlebars', handlebars.engine()); //ejecutar motor.
app.set('views', __dirname+'/views'); //ruta de la carpeta de vistas.
app.set('view engine', 'handlebars'); //relaciona el motor con sus vistas.

//Router vistas -> render
app.use('/', viewsRouter);

//Router información --> datos
app.use('/api/users', usersRouter);//añadir '/api/...', pq si no se puede confundir con la ruta de vistas '/'.


