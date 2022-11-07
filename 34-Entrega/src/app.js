import express from 'express';
import mongoose from 'mongoose';

import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import viwesRouter from './routers/views.routers.js';
import sesionsRouter from './routers/sessions.router.js';

import config from './config/config.js';

const app = express();

const connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.dkrjcaf.mongodb.net/34Entrega?retryWrites=true&w=majority`);

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

//Server
const server = app.listen(8080, ()=>{
    console.log(`👽 Now listenig on 👉 ${server.address().port}`)
});
server.on("error", error => console.log(`Error en el servidor ${error}`)); 

//format od files json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use('/', viwesRouter);
app.use('/api/sessions', sesionsRouter);