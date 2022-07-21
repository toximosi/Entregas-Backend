// importaciones ----------------------------
//express
import express from 'express';
//routers
import startRouter from './routers/start.router.js';
import productsRouter from './routers/products.router.js';

//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 


app.use(express.json())//informamos al servidor como se leen los datos
//CODE ------------------------------
//Static files
app.use(express.static('public'))//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes

app.use('/', startRouter);
/* app.use('/users', usersRouter); */

//productos
app.use('/productos', productsRouter);