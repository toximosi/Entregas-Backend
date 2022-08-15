//import ----------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
import { uploader } from '../utils.js';

//bd -> file
const bd = __dirname + '/public/bd/carts.json';
const bdPro = __dirname + '/public/bd/products.json';

//function -------------------------------
//class
import managersServices from '../services/Managers.service.js';
const man = new managersServices();
import cartsServices from '../services/Carts.service.js';
const car = new cartsServices();

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
router.get('/:id/products', async(req, res)=>{

	let id = parseInt(req.params.id);
	let data = await car.getAllProductsCart(bd, id);
	res.send(data);

});

//CREATE 
router.post('/', async(req, res)=>{

	
	let obj = {
		id: await man.addId(bd), 
        timestamp: Date.now(),
	}
	
	await man.create(bd, obj);

	res.send({ status: '👀 success', message: '👌 product added', product: obj });
	
});

/* router.post('/:products', async(req, res)=>{

	const{products} = req.body;
	
	if (!products) return res.status(400).send({ status: 'error', error: 'incomplete values' });
	
	let obj = {
		id: await man.addId(bd), 
        timestamp: Date.now(),
        products,
	}
	await man.create(bd, obj);
	newObj = obj;
	res.send({ status: '👀 success', message: '👌 product added', product: obj });
	
}); */

//UPDATE
/* router.put('/:id', async (req, res) => {
	let id = parseInt(req.params.id);
	let obj = req.body;
	let image = req.file.filename; 
	obj.push(image);

	if(isNaN(id)) return res.status(400).send('🧟‍♂️ the id is not a number');

	const bdNew = await man.changeProdById(bd, obj, id);
	await man.updateBd(bd, bdNew);
	
}); */

//DELETE
router.delete('/:id', async (req, res) => {
	let id = parseInt(req.params.id);
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	
	const bdNew = await man.deleteId(bd,id);
	await man.updateBd(bd, bdNew);
	res.send({ status: '👀 success', message: '👌 cart deleted'});
});

router.delete('/:id/products/:idpro', async (req, res) => {
	let id = parseInt(req.params.id);
	let idpro = parseInt(req.params.idpro);
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	if(isNaN(idpro)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	
	const bdNew = await car.deteteIdProdCart(bd, id, idpro);
	await man.updateBd(bd, bdNew);

	res.send({ status: '👀 success', message: '👌 product deleted'});
});

export default router;