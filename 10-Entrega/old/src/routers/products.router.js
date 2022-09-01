//import ------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../utils.js';//static
/* import { uploader } from '../utils.js'; */

//BD

//class
import communService from '../services/Commun.service.js';
const commun = new communService();

import productsService from '../services/Products.service.js';
const pro = new productsService();

import readfilesServices from '../services/ReadFile.service.js';
const refi = new readfilesServices();

//bd -> file
/* const json = __dirname + '/json/products.json'; */
const jsonIni = [
	{
		"title": "01 producto",
		"price": 0.01,
		"image": "01image.jpg",
		"id": 1
	},
	{
		"title": "02 producto",
		"price": 0.02,
		"image": "02image.jpg",
		"id": 2
	},
];
const bdName = 'products';

//CODE ------------------------------------------------------------------------------
//Ruta base -> /products
//Crear tabla
router.post('/createTable', (req, res) => {
//https://knexjs.org/guide/schema-builder.html#hastable
	bd.schema.hasTable(bdName).then(function (exists) {
		if (!exists) {
			return bd.schema.createTable(bdName, table => {
				//table.primary('id');
				table.increments('id');
				table.string('title', 40).nullable(false);
				table.integer('price').nullable(false);
				table.string('image', 100).nullable(false);
			})
				.then(() => {
					res.status(200).send(`👍 table has been created -> ${bdName}`);
					console.log(`👍 table has been created -> ${bdName}`);
				})
				.catch(err => {
					res.status(500).send(`🚩 we could not create the table -> ${bdName},\n 💀 error: ${err}`);
					console.log(`🚩 we could not create the table -> ${bdName},\n 💀 error: ${err}`);
					throw err;
				})
				.finally(() => bd.destroy());
		} else { 
			console.log(`😮 the table already exists -> ${bdName}`);
		}
	});
});
//añadir datos a la tabla
router.post('/createTable/addData', async (req, res) => { 
	try {
		let prod = jsonIni;
		console.log(prod)
		await commun.addObj(options, bdName, prod);
		
		res.send({ status: '200 👀 success', message: '👌 element added', product: prod });

	} catch (err) { 
		res.status(500).send(`🚩 Can not add elements in table db ${bdName},\n error: 💣  ${err}`);
	}
});

//CRUD------------------------------------------------------------------------------
//READ
router.get('/', async (req, res) => {
	try {
		let obj = await commun.getAll(options, bdName);
		/* dataJSON = JSON.parse(JSON.stringify(data)); */
		if (obj.length <= 0) {

			res.status(200).send(`👍  the table is empty,\n table -> ${bdName}`);
			obj = [];
			res.send(obj);

		} else { 

			res.status(200).send(`👍  get data of table,\n table -> ${bdName},\n data -> ${JSON.stringify(obj)}`);
			res.send(obj);
		}
		
	} catch (err) { 
		console.log(`🚩 Can not get data in table db ${bdName},\n error: 💣  ${err}`);
		/* res.status(500).send(`🚩 Can not get data in table db ${bdName},\n error: 💣  ${err}`); */
	}
});

//READ ELEMENT BY ID
router.get('/:id', async(req, res)=>{
	try {
		let id = parseInt(req.params.id);
		if (isNaN(id)) return res.status(400).send(`🧟‍♂️ the id params is not a number,\n params -> ${id}`);

		let obj = await commun.getById(options, bdName, id);

		if (obj.length <= 0) {

			res.status(200).send(`👍  the element not exist,\n table -> ${bdName},\n id element -> ${id}`);
			obj = [];
			res.send(obj);

		} else { 

			res.status(200).send(`👍  get element of table,\n table -> ${bdName},\n element -> ${JSON.stringify(obj)}`);
			res.send(obj[0]);
		}
	} catch (err) { 
		console.log(`🚩 Can not get element in table db ${bdName},\n error: 💣  ${err}`);
		/* res.status(500).send(`🚩 Can not get element in table db ${bdName},\n error: 💣  ${err}`); */
	}
});

//CREATE 
router.post('/', /* uploader.single('image'), */ async(req, res)=>{
	try {
		const { id, title, price, image } = req.body;
	
		if (!id || !title || !price || !image) return res.status(400).send({ status: 'error', error: 'incomplete values' });
		if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
		/* if(!req.file) res.status(500).send({status:'error', error:'Could not upload file'}); */
		let prod = {
			title,
			price,
			image,
			id
			/* image:req.file.filename */
		}
		/* prod.id = await commun.addId(bd,prod); */

		await commun.addObj(options, bdName, prod);
		
		res.send({ status: '200 👀 success', message: '👌 element added', product: prod });

	} catch (err) { 
		res.status(500).send(`🚩 Can not add element in table db ${bdName},\n error: 💣  ${err}`);
	}
});

//UPDATE
router.put('/:id', async(req, res) => {
	try { 
		let id = parseInt(req.params.id);
		let prodChange = req.body;
		console.log(prodChange)
		if(isNaN(id)) return res.status(400).send('🧟‍♂️ El parametro no es un número');
	
		let objChange = await commun.updateByID(options, bdName, id, prodChange);
		res.send({ status: '200 👀 success', message: '👌 element change', product: objChange });

	} catch (err) { 
		res.status(500).send(`🚩 Can not add element in table db ${bdName},\n error: 💣  ${err}`);
	}
});

//DELETE
router.delete('/:id', async(req, res)=>{
	try {
		let id = parseInt(req.params.id);
	
		if (isNaN(id)) return res.status(400).send(`🧟‍♂️ the id params is not a number,\n params -> ${id}`);

		await commun.deleteByID(options, bdName, id);

		res.status(200).send(`👍  delete element of table,\n table -> ${bdName},\n element id -> ${id}`);

	} catch (err) { 
		console.log(`🚩 Can not deleted the element in table db ${bdName},\n element id -> ${id},\n error: 💣  ${err}`);
		/* res.status(500).send(`🚩 Can not get element in table db ${bdName},\n error: 💣  ${err}`); */
	}
});

export default router;