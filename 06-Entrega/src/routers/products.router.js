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
const bd = __dirname + '/public/bd/bd.json';

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
	
	await man.create(bd, prod);

	res.send({ status: '👀 success', message: '👌 product added', product: prod });
	

});

/* POST datos recogidos solo desde body ----------------------------------------------------------
	router.post('/', async(req, res)=>{
	let prod = req.body;
	if(!prod.title) return (res.status(400).send({status:'👀 success', message: '🙅 Invalid input', value: 'title'}));
	if(!prod.price) return (res.status(400).send({status:'👀 success', message: '🙅 Invalid input', value: 'price'}));
	
	let id = await man.addId(bd);
	id = parseInt(id);
	prod.id = id;

	(id < 10) ? prod.image = "0"+id+"image.jpg" : prod.image = id+"image.jpg"
	
	await man.create(bd,prod);

	res.send({status:'👀 success', message: '👌 product added', producto: prod , id: prod.id})
}); */


//GET
/* router.get('/:id', (req, res)=>{
	let id = req.params.id;
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	id = parseInt(id);
	if(id < 1 || id >products.length) return res.status(400).send('🙇‍♂️ no hay nada con ese valor'); 
	
	let sel = "";
	products.forEach(e=>{
			if(e.id == id) sel = e
		}
	);
	res.send(sel);
}); */

//UPDATE
/* router.put('/:id', (req, res)=>{
	let id = parseInt(req.params.id);
	let prodChange = req.body;
	console.log(req.body);
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	if(id < 1 || id >products.length) return res.status(400).send('🙇‍♂️ no hay nada con ese valor');

	let prod = "";

	products.forEach(e=>{
		if(e.id == id){
			e.title = req.body.title;
			e.price = req.body.price;
			e.image = req.body.image;
		}else{
			return res.send('🙇‍♂️ no hay producto con el id: ' + id); 
		}
	})
	console.log(req.body)
	res.send({products});
}); */

//DELETE
/* router.delete('/:id', (req, res)=>{
	let id = parseInt(req.params.id);
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	if(id < 1 || id >products.length) return res.status(400).send('🙇‍♂️ no hay nada con ese valor'); 
	products.forEach(e => {
			if (e.id == id){
				products.splice(id - 1, 1);
			}else{
				return res.send('🙇‍♂️ no hay producto con el id: ' + id); 
			}
		})
	res.send({products});
}); */



export default router;