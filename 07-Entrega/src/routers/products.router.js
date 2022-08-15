//import ------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
import { uploader } from '../utils.js';
//class
import managersServices from '../services/Managers.service.js';
const man = new managersServices();
//middlewares	
import isAdmin from '../middlewares/admin.js'

//function -----------

//bd -> file
const bd = __dirname + '/public/bd/products.json';
const newObj = "";
//CODE --------------------------------------
//Ruta base -> /products

//CRUD------------------
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
router.post('/', isAdmin, uploader.single('image'), async(req, res)=>{

	const{name, description, code, price, stock} = req.body;
	
	if (!name || !description || !code || !price || !stock) return res.status(400).send({ status: 'error', error: 'incomplete values' });
	/* if(!req.file) res.status(500).send({status:'error', error:'Could not upload file'}); */
	
	let obj = {
		id: await man.addId(bd), 
        timestamp: Date.now(),
        name, 
        description, 
        code, 
        /* image: req.file.filename, */ 
        image: "image url", 
        price, 
        stock,
	}
	
	await man.create(bd, obj);
	/* newObj = obj; */
	res.send({ status: '👀 success', message: '👌 product added', product: obj });
	
});

//UPLOAD
router.put('/:id', isAdmin, async (req, res) => {
	let id = parseInt(req.params.id);
	let obj = req.body;
	/* let image = req.file.filename; 
	obj.push(image); */

	if(isNaN(id)) return res.status(400).send('🧟‍♂️ the id is not a number');

	const bdNew = await man.changeProdById(bd, obj, id);
	await man.updateBd(bd, bdNew);
	
});

//DELETE
router.delete('/:id', isAdmin, async (req, res) => {
	let id = parseInt(req.params.id);
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	
	const bdNew = await man.deleteId(bd,id);
	await man.updateBd(bd, bdNew);
});

export default router;