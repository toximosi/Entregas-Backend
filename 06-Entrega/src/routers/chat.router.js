//imports -------------------------------
import { Router } from "express";
const router = Router();

import managersServices from '../services/Managers.service.js';
const man = new managersServices();

import __dirname from '../utils.js';//static


//bchatFile-> file
const chatFile = __dirname + '/public/bd/cahtFile.json';

//Routers -------------------------------

router.get('/productos', async (req, res) => {
    let Arr = await man.getAll(chatFile);
    res.render('products', { Arr });//indica la plantilla a usar y la data a pasar
});

router.get('/productoNew', (req, res) => {
    res.render('productNew');//nombre de la vista -> procdutcsNew
});

//export --------------------------------
export default router;