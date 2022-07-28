//import ------------------------------------
import { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
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
router.post('/', (req, res)=>{
	const{title, price, thumbnail, id} = req.body;

	/* let prod = req.body; */

	prod.id = products.length + 1;
	
	(id < 10) ? prod.thumbnail = "0"+id+"image.jpg" : prod.thumbnail = id+"image.jpg"
	products.push(prod);

	res.send({status:'👀 success', message: '👌 product added', producto: prod , id: prod.id})
});
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
			e.thumbnail = req.body.thumbnail;
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