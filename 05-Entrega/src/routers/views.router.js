//imports -------------------------------
import { Router } from "express";
const router = Router();

//Routers -------------------------------
router.get('/products', (req,res)=>{
    res.render('products');
})

//export --------------------------------
export default router;