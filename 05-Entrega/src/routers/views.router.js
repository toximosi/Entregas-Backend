//imports -------------------------------
import { Router } from "express";
const router = Router();

//Routers -------------------------------
router.get('/', (req,res)=>{
    
    let products = fetch('/api/productos')
        .then(res => res.json())
         .then(json => console.log(json));

    res.render('products', {
        "hasProducts" : products.lenght>0,
        products

    });
})

router.get('/productNew', (req,res)=>{
    res.render ('productNew');//nombre de la vista -> procdutcsNew
})
//export --------------------------------
export default router;