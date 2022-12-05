import express from 'express';
import __dirname from './utils.js';

import cors from 'cors';

import handlebars from 'express-handlebars';

import viewsRouter from './routers/views.routers.js';
import userRouter from './routers/users.router.js';
import sessionsRouter from './routers/sessions.router.js';
import productRouter from './routers/products.router.js';
import cartRouter from './routers/carts.router.js';

//APP ------------------------------------------------------------------------- INICIO
const app = express();

//JSON FORMAT ------------------------------------------------------------------------- INICIO
app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */

//Views handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Static files
app.use(express.static(__dirname + '/public'));
app.use(cors());

//ROUTERS ------------------------------------------------------------------------- INICIO
/* 
app.use('/api/data', dataRouter); */
app.use('/', viewsRouter);
app.use('/api/user', userRouter);
app.use('/api/session/',sessionsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);

//SERVER ------------------------------------------------------------------------- INICIO
const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 