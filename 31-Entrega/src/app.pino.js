import express from 'express';
import pino from 'pino';

//Levantar servidor
const PORT = process.env.PORT || 8080;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//LOG------------------------------------------------------------------------- FIN
const streams = [
    { level: 'info', stream: process.stdout },//by Console
    { level: 'warn', stream: pino.destination('./warn.pino.log') },
    { level: 'error', stream: pino.destination('./error.pino.log') },
    
];
const logger = pino({}, pino.multistream(streams));

//ROUTERS ------------------------------------------------------------------------- INICIO
app.get('/', (req, res) => {
    logger.fatal('fatal');
    logger.error('error');
    logger.warn('warn');
    logger.info('info');
    logger.debug('debug');
    logger.fatal('fatal');
    res.send('logging');
});
