import express from 'express';

import os from 'os'//operate system
import cluster from 'cluster';
import { format } from 'path';

import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routers/views.router.js';


//Levantar servidor
const CPUs = os.cpus().length;//nos trae información de cada uno de los nucleos del sistema operativo
//const CPUs = os.cpus().length / 2; //para no usar todos los hijos y no saturar la memoria del servidor
//console.log('  -> Número de núcleos en el procesador: ' + CPUs);
const PORT = 8080;
const app = express();

//CLUSTER ------------------------------------------------------------------------- INICIO
if (cluster.isPrimary) {
    console.log('  -> Soy un proceso primario con pid: ' + process.pid);
    for (let i = 0; i < CPUs; i++) { cluster.fork() };
    cluster.on('exit', worker => { 
        console.log(`Murio proceso worker con pid ${worker.process.pid}`);
    })
} else { 
    console.log('  -> Soy un proceso worker con pid: ' + process.pid);
    app.listen(PORT, ()=>{console.log(`👽 Now listenig`)});
}
//CLUSTER ------------------------------------------------------------------------- FIN

//server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Static files
app.use(express.static(__dirname + '/public'));//principal folder -> express buscara los archivos estáticos en esta carpeta.

app.engine('handlebars', handlebars.engine({
  extname: 'handlebars',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
//motor de views -> plantillas 
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//ROUTERS ------------------------------------------------------------------------- INICIO
app.use('/', viewsRouter); //Views

//ROUTERS ------------------------------------------------------------------------- FIN