import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{

    res.render('index', {
        numProcess : "",//numero de porcesadores

    });
});
export default router;