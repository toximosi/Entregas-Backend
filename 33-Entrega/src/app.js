import express from 'express';

//Levantar servidor
const PORT = process.env.PORT || 8080;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 



//ROUTES
app.use('/', (req, res) => {
    res.send('bienvenido');
});
