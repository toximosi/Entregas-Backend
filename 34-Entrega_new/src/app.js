import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express from 'express';
import pino from 'pino';

import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import viwesRouter from './routers/views.routers.js';
import sesionsRouter from './routers/sessions.router.js';
import productRouter from './routers/product.router.js';

import config from './config/config.js';

const app = express();

const connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.dkrjcaf.mongodb.net/34Entrega?retryWrites=true&w=majority`);

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/public'));
//Templates wiews
/* app.engine('handlebars', handlebars.engine({
  extname: 'handlebars',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
})); */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(cookieParser());

//Router
app.use('/', viwesRouter);
app.use('/api/sessions', sesionsRouter);
app.use('/api/product', productRouter);

const PORT = config.app.PORT || 8080;
//Server
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 


//LOG------------------------------------------------------------------------- FIN
const streams = [
    { level: 'info', stream: process.stdout },//by Console
    { level: 'warn', stream: pino.destination('./src/logs/warn.log') },
    { level: 'error', stream: pino.destination('./src/logs/error.log') },
    
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