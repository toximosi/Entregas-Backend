import express from 'express';
import crypto, { randomFillSync } from 'crypto';
import infoRouter from './routes/info.router.js';


//Levantar servidor
const PORT = process.env.PORT || 8080;
const app = express();

const server = app.listen(PORT, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 



//ROUTES
app.use('/info', infoRouter);

let cant = 10000;
let cantfin = 9;

app.get('/random-debug', (req, res) => {
    let randoms = [];
    for (let i = 0; i < cant; i++) {
        let num = Math.floor(Math.random() * cantfin);
        console.log(num)
        randoms.push(num);
    };
    console.log(randoms);
    res.send({ randoms });
});

app.get('/random-nodebug', (req, res) => { 
    let randoms = [];
    for (let i = 0; i < cant;i++ ) { 
        randoms.push(Math.floor(Math.random() * cantfin));
    };
    res.send({ randoms });
})
