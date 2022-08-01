//imports -------------------------------
import { Router } from "express";
const router = Router();

import managersServices from '../services/Managers.service.js';
const man = new managersServices();

import __dirname from '../utils.js';//static


//bd -> file
const bd = __dirname + '/public/bd/bd.json';

//Routers -------------------------------
/* router.get('/', (req,res)=>{
    
    let products = fetch('/api/productos')
        .then(res => res.json())
         .then(json => console.log(json));

    res.render('products', {
        "hasProducts" : products.lenght>0,
        products

    });
}) */

router.get('/productos', async(req, res)=>{
    let Arr = await man.getAll(bd);
    res.render('products', {Arr});//indica la plantilla a usar y la data a pasar
})

router.get('/productoNew', (req,res)=>{
    res.render('productNew');//nombre de la vista -> procdutcsNew
})


//export --------------------------------
export default router;