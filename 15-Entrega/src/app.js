import config from '../../14-Entrega/src/config/config.js';

import express from 'express';

import os from 'os'//operate system
import cluster from 'cluster';
import { format } from 'path';

//Levantar servidor
const CPUs = os.cpus().length;//nos trae información de cada uno de los nucleos del sistema operativo
//ejem limitar uso de hijos: const CPUs = os.cpus().length / 2; //para no usar todos los hijos y no saturar la memoria del servidor
//console.log('  -> Número de núcleos en el procesador: ' + CPUs);
const PORT = process.env.PORT  || 8080;
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




//ROUTERS ------------------------------------------------------------------------- INICIO
app.get('/', (req, res) => { 
    res.send('id process: '+ process.pid + '<br> in port: ' + PORT)
})

//ROUTERS ------------------------------------------------------------------------- FIN