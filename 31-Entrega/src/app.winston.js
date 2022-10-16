import express from 'express';
import winston from 'winston';

//Levantar servidor
const PORT = process.env.PORT  || 8080;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 
//LOG------------------------------------------------------------------------- FIN
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({level: 'warning', filename: './logger/warn.log'}),
        new winston.transports.File({ level: 'error}', filename: './logger/error.log' }),
    ]
});

//ROUTERS ------------------------------------------------------------------------- INICIO
app.get('/', (req, res) => { 
    res.send('id process: '+ process.pid + '<br> in port: ' + PORT)
})

app.get('/', (req, res) => {
    logger.log('silly', '127.0.0.1 -there`s no place like home');
    logger.log('debug', '127.0.0.1 -there`s no place like home');
    logger.log('verbose', '127.0.0.1 -there`s no place like home');
    logger.log('info', '127.0.0.1 -there`s no place like home');
    logger.log('warn', '127.0.0.1 -there`s no place like home');
    logger.log('error', '127.0.0.1 -there`s no place like home');
    res.send('logging');
});
