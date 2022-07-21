//IMPORT ------------------------------------
import { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.

//General function
/* const Products = require('../service/products.service.js');
const productsServide = new Products();  */

//file
/* const file = './src/json/products.json';
const element = require(file); */

const products = [
		{
			"title": "01 producto",
			"price": 0.01,
			"thumbnail": "01image.jpg",
			"id":1
		},
		{
			"title": "02 producto",
			"price": 0.02,
			"thumbnail": "02image.jpg",
			"id":2
		},
		{
			"title": "03 producto",
			"price": 0.03,
			"thumbnail": "03image.jpg",
			"id":3
		},
		{
			"title": "04 producto",
			"price": 0.04,
			"thumbnail": "04image.jpg",
			"id":4
		}
]

//CODE --------------------------------------
//Ruta base -> /products

//CRUD------------------
//READ
router.get('/', (req, res)=>{
	res.send({products}); 
});

//CREATE 
router.post('/', (req, res)=>{
	let prod = req.body;
	if(!prod.name) return (res.status(400).send({status:'👀 success', message: '🙅 Invalid input', value: 'name'}));
	if(!prod.price) return (res.status(400).send({status:'👀 success', message: '🙅 Invalid input', value: 'price'}));
	/* if(!prod.image) return (res.status(400).send({status:'👀 success', message: '🙅 Invalid input', value: 'image'})); */
	prod.id = products.length + 1;
	(id < 10) ? prod.thumbnail = "0"+id+"image.jpg" : prod.thumbnail = id+"image.jpg"
	products.push(prod);
	res.send({status:'👀 success', message: '👌 product added', producto: prod , id: prod.id})
});
//GET
router.get('/:id', (req, res)=>{
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
});

//UPDATE
router.put('/:id', (req, res)=>{
	let id = req.params.id;
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	id = parseInt(id);
	if(id < 1 || id >products.length) return res.status(400).send('🙇‍♂️ no hay nada con ese valor');

	products.forEach(e=>{
		if(e==id){
			e.title = req.body.title;
			e.price = req.body.price;
			e.thumbnail = req.body.thumbnail;
		}
	})
});

//DELETE
router.delete('/:id', (req, res)=>{
	let id = req.params.id;
	if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	id = parseInt(id);
	if(id < 1 || id >products.length) return res.status(400).send('🙇‍♂️ no hay nada con ese valor'); 
	
	let newProducts = products.filter(e=>{
			e.id != id
			console.log(e.id)
		}
	);
	res.send("hola");
});



export default router;