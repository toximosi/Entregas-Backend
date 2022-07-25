// importaciones ----------------------------
//express
import express from 'express';
//routers


//Server ------------------------------------
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 


app.use(express.json())//informamos al servidor como se leen los datos
app.use(express.urlencoded({ extended: true }))
//CODE ------------------------------
//Static files
app.use(express.static('public'))//principal folder -> express buscara los archivos estáticos en esta carpeta.

//Routes

