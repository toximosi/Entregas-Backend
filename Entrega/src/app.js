import express from 'express';
import __dirname from './utils.js';
import cors from 'cors';

import userRouter from './routers/users.router.js';
import sessionsRouter from './routers/sessions.router.js';
import productRouter from './routers/products.router.js';

//APP ------------------------------------------------------------------------- INICIO
const app = express();

//JSON FORMAT ------------------------------------------------------------------------- INICIO
app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */

//Static files
app.use(express.static(__dirname + '/public'));

/* app.use(cors()); */

//ROUTERS ------------------------------------------------------------------------- INICIO
/* app.use('/', viwesRouter);
app.use('/api/cart', cartRouter);
app.use('/api/data', dataRouter); */
app.use('/api/user', userRouter);
app.use('/api/sessions/',sessionsRouter);
app.use('/api/product', productRouter);

//SERVER ------------------------------------------------------------------------- INICIO
const PORT = process.env.PORT || 8081;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 