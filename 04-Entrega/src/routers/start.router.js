//IMPORT ------------------------------------
import { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.

import appCode from '../misc/appCode.js';



//CODE --------------------------------------
//Ruta base -> /products

//CRUD------------------
//READ
router.get('/', (req, res)=>{
	res.send('get ok'); 
});


export default router;