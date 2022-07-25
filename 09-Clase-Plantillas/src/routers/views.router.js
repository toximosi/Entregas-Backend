//imports
import { Router } from "express";

//routers
const router = Router();

router.get('/', (req, res)=>{

    res.render('nombre de la vista',{});
})




//exports
export default router;