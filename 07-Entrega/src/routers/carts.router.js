//import ----------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
import { uploader } from '../utils.js';

//bd -> file
const bd = __dirname + '/public/bd/carts.json';

//function -------------------------------
//class
import managersServices from '../services/Managers.service.js';
const man = new managersServices();

//CODE ------------------------------------
//Ruta base -> /carts
//CRUD-------------------------------------
//READ
router.get('/', async(req, res)=>{
	
	let data = await man.getAll(bd);
	res.send(data);

});

router.get('/:id', async(req, res)=>{
	
	let id = parseInt(req.params.id);
	let data = await man.getById(bd, id);

	res.send(data);

});

//CREATE 
router.post('/', uploader.single('image'), async(req, res)=>{

	const{title, price} = req.body;
	
	if(!title || !price) return res.status(400).send({status:'error', error:'incomplete values'});
	if(!req.file) res.status(500).send({status:'error', error:'Could not upload file'});
	
	let prod = {
		title,
		price,
		image:req.file.filename
	}
	prod.id = await man.addId(bd,prod);
	
	let bdNew = await man.create(bd, prod);

	res.send({ status: '👀 success', message: '👌 product added', product: prod });
	
});

//UPLOAD
router.put('/:id', async (req, res) => {

});

//DELETE
router.delete('/:id', async (req, res) => {

});

export default router;