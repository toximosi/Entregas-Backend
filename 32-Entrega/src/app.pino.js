import express from 'express';
//import pino from 'pino';
import cluster from 'cluster';
import { cpus } from 'os';

//Levantar servidor
//const PORT = process.env.PORT || 8080;
const PORT = parseInt(process.argv[2]) || 8080
const modoCluster = process.argv[3] == 'CLUSTER';
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 
//LOG------------------------------------------------------------------------- FIN
/* const streams = [
    { level: 'info', stream: process.stdout },//by Console
    { level: 'warn', stream: pino.destination('./logger/pino/warn.log') },
    { level: 'error', stream: pino.destination('./logger/pino/error.log') },
    
];
const logger = pino({}, pino.multistream(streams)); */

//ROUTERS ------------------------------------------------------------------------- INICIO
/* app.get('/', (req, res) => {
    logger.fatal('fatal');
    logger.error('error');
    logger.warn('warn');
    logger.info('info');
    logger.debug('debug');
    logger.fatal('fatal');
    res.send('logging');
}); */


/* app.get('/info', (req, res) => { 

})
 */
/* app.get('/randoms', (req, res) => {
    res.send('random');
}); */
//------------------------------------------------------------------
if (modoCluster && cluster.isPrimary) {
   const numCPUs = cpus().length

   console.log(`Número de procesadores: ${numCPUs}`)
   console.log(`PID MASTER ${process.pid}`)

   for (let i = 0; i < numCPUs; i++) {
       cluster.fork()
   }

   cluster.on('exit', worker => {
       console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
       cluster.fork()
   })
} else {
   const app = express()

   app.get('/', (req, res) => {
       const primes = []
       const max = Number(req.query.max) || 1000
       for (let i = 1; i <= max; i++) {
           if (isPrime(i)) primes.push(i)
       }
       res.json(primes);
   })

   app.listen(PORT, () => {
       console.log(`Servidor express escuchando en el puerto ${PORT}`);
       console.log(`PID WORKER ${process.pid}`);
   })
};

function isPrime(num) {
   if ([2, 3].includes(num)) return true;
   else if ([2, 3].some(n => num % n == 0)) return false;
   else {
       let i = 5, w = 2;
       while ((i ** 2) <= num) {
           if (num % i == 0) return false
           i += w
           w = 6 - w
       }
   }
   return true
};
