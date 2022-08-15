//imports -------------------------------
import { Router } from "express";
const router = Router();

import managersServices from '../services/Managers.service.js';
const man = new managersServices();

/* const socker = io(); */
import __dirname from '../utils.js';//static

//bd -> file
const bdProds = __dirname + '/public/bd/products.json';
const bdCarts = __dirname + '/public/bd/carts.json';

//Routers -------------------------------

router.get('/', async(req, res)=>{
    res.render('index');//indica la plantilla a usar y la data a pasar
})

router.get('/products', async(req, res)=>{
    let Arr = await man.getAll(bdProds);
    res.render('products', { Arr });//indica la plantilla a usar y la data a pasar
})

/* router.get('/productoNew', async (req, res) => {
        let Arr = await man.getAll(bd);
        let ArrIdInv = await man.orderIdInv(Arr);
        res.render('productNew', { ArrIdInv });

}); */


/*carts -------------------------*/
router.get('/carts', (req,res)=>{
    res.render('carts', "carts");//nombre de la vista -> procdutcsNew
})


//export --------------------------------
export default router;