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

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 
//CLUSTER ------------------------------------------------------------------------- FIN


//ROUTERS ------------------------------------------------------------------------- INICIO
app.get('/', (req, res) => { 
    res.send('id process: '+ process.pid + '<br> in port: ' + PORT)
})
