//imports -------------------------------
import { Router } from "express";
const router = Router();
import __dirname from '../utils.js';//static
import { uploader } from '../utils.js';

/* import bd from '../options/mariaDB.js'; */
import BDdata from '../options/SQLite3.js';
const options = BDdata.options;
const bd = BDdata.bd;

import knex from "knex"; 

//class
import communService from '../services/Commun.service.js';
const commun = new communService();

import productsService from '../services/Products.service.js';
const pro = new productsService();

import readfilesServices from '../services/ReadFile.service.js';
const refi = new readfilesServices();

//bd -> file
/* const bdChat = __dirname + './json/chats.json'; */
const jsonIni = [
    {
        "id": "0",
        "user": "Juan",
        "text": "Iniciando chat",
        "date": "2022-08-07T13:51:13.591Z"        
    }
];
const bdName = 'chats';

//Routers -------------------------------
//Crear tabla
router.post('/createTable', (req, res) => {
//https://knexjs.org/guide/schema-builder.html#hastable
	bd.schema.hasTable(bdName).then(function (exists) {
		if (!exists) {
			return bd.schema.createTable(bdName, table => {
				//table.primary('id');
				table.increments('id');
                table.string('user', 40).nullable(false);
                table.string('text').nullable(false);
                table.string('date', 30);
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
		let obj = jsonIni;
		console.log(obj)
		await commun.addObj(options, bdName, obj);
		
		res.send({ status: '200 👀 success', message: '👌 element added', product: obj });

	} catch (err) { 
		res.status(500).send(`🚩 Can not add elements in table db ${bdName},\n error: 💣  ${err}`);
	}
});

//CRUD----------------------------------------------------------------------------
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

router.post('/', async(req, res) =>{

    try {
		const { id, user, text, date } = req.body;
	
		if (!id ||!user || !date || !text) return res.status(400).send({ status: 'error', error: 'incomplete values' });
		if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
	
        let chat = { id, user, text, date };

		await commun.addObj(options, bdName, chat);
		
		res.send({ status: '200 👀 success', message: '👌 element added', chat: chat });

	} catch (err) { 
		res.status(500).send(`🚩 Can not add element in table db ${bdName},\n error: 💣  ${err}`);
	}
})


//export --------------------------------
export default router;