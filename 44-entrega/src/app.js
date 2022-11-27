import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import pino from 'pino';
import session from 'express-session'

import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';

import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUiExpress from 'swagger-ui-express';

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

import __dirname from './utils.js';
import handlebars from 'express-handlebars';

import viwesRouter from './routers/views.routers.js';
import sesionsRouter from './routers/sessions.router.js';
import productRouter from './routers/product.router.js';
import cartRouter from './routers/cart.router.js'
import userRouter from './routers/user.router.js'
import dataRouter from './routers/data.router.js'

import config from './config/config.js';

const app = express();

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: "API Coder",
            description: "Work to CoderHouse Backend course"
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
};

const specs = swaggerJSDoc(swaggerOptions);
app.use('/apidocs', SwaggerUiExpress.serve, SwaggerUiExpress.setup(specs));


var corsOptions = {
    origin: `https://${process.env.HOST}:${process.env.PORT}`,
    opotionsSuccessStatus: 200,

};
app.use(cors(corsOptions));//rutas accesible para todo el aplicación
const PORT = process.env.PORT || 8081;
//Server
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//--> incluir Graphql con apoilloserver
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});
await apolloServer.start();
apolloServer.applyMiddleware({ app });


/* const connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`); */

//--> Crear sesion
app.use(session({
    secret: "Sessi0n",
    /* store: MongoStore.create({
        mongoUrl: `mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 6000
    }), */
    resave: false,
    saveUninitialized: false,
}));

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

//Static files
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());


//Router
app.use('/', viwesRouter);
app.use('/api/sessions', sesionsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);
app.use('/api/data', dataRouter);



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