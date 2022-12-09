import express from 'express';
import session from 'express-session'

import cookieParser from 'cookie-parser';

import __dirname from './utils.js';

import cors from 'cors';

import handlebars from 'express-handlebars';

import viewsRouter from './routers/views.routers.js';
import userRouter from './routers/users.router.js';
import sessionsRouter from './routers/sessions.router.js';
import productRouter from './routers/products.router.js';
import cartRouter from './routers/carts.router.js';

//APP ------------------------------------------------------------------------- 
const app = express();

//SESSION------------------------------------------------------------------------
app.use(session({
    secret: "Sessi0n",
    /* store: MongoStore.create({
        mongoUrl: `mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 6000
    }),  */
    resave: false,
    saveUninitialized: false,
}));

//COOKIE ------------------------------------------------------------------------- 
app.use(cookieParser());

//JSON FORMAT ------------------------------------------------------------------------- 
app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */

//Views handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Static files
app.use(express.static(__dirname + '/public'));
app.use(cors());

//ROUTERS ------------------------------------------------------------------------- 
app.use('/', viewsRouter);
app.use('/api/user', userRouter);
app.use('/api/session/',sessionsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);

//SERVER ------------------------------------------------------------------------- 
const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 