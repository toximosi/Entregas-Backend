//import ------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
import { uploader } from '../utils.js';
//class
import managersServices from '../services/Managers.service.js';
const man = new managersServices();
//function -----------

//bd -> file
const bd = __dirname + '/public/bd/carts.json';

//CODE --------------------------------------
//Ruta base -> /products

//CRUD------------------
//READ
router.get('/', async(req, res)=>{
	
	let data = await man.getAll(bd);
	res.send(data);

});




export default router;