import { Router } from "express";
const router = Router();

import conexion from '../conexion.js';

//& DB ----------------------------------------------
import faker from 'faker';

import productsModel from '../models/products.models.js';
const model = productsModel;

//data 
import dataIni from '../json/products.json' assert {type: "json"};

//function
import FuctionsServices from "../services/manager.service.js";
const fun = new FuctionsServices();

//Code ----------------------------------------------
//CRUD
//* CREATE
/// INICIALICE
//add initial data
router.post('/start', async (req, res) => {
    const obj = dataIni;
    console.log(obj);
    try { 
        const data = await fun.startData(model, obj);
        res.send(`👍 Add data is ok.\n
                  data -> ${data}`)
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

/// Create element
router.post('/create', async(req, res) => {
    try { 
        /* const{id, name, description, code , image, price, stock} = req.body */
        faker.locale = 'es';
        const { nombre, id } = await req.body;
        const { commerce , random , image } = faker;
        /* if (!id || !name || !description || !code || !image || !price || !stock) {  */
        if (!id || !name || !description || !code || !image || !price || !stock) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values' });
        }
        let obj = {
            id:id,
            timestamp: Date.now(),
            name: nombre,
            description: commerce.productDescription(),
            code: random.number(),
            image:image.image(),
            price: commerce.price(),
            stock,
        }
        const data = await fun.addObj(model, obj);
        res.send(`👍 Add data is ok.\n
                  data -> ${data}`);

    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

//* READ
// ALL
router.get('/', async(req, res) => { 
    try { 
        const data = await fun.getAll(model);
        res.send(data);
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
})
// Element by id
router.get('/:id', async(req, res) => { 
    try { 
        let id = parseInt(req.params.id);
      	if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
        let data = await fun.getById(model, id);
        if (data != '') {
            res.send({ status: '👀 success', message: '👌 product exist', product: data });
        } else { 
            return res.status(400).send(`🧟‍♂️ the id ${id} not exist`);
        }
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

//* DELETE
//-> Element by ID
router.delete('/deleted/:id', async(req, res) => { 
    try { 
        let id = parseInt(req.params.id);
	    if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
        let exist = await fun.existId(model, id);
        if (exist != "") {
            let obj = await fun.getById(model, id);
            await fun.deleteById(model, id);
            res.send({ status: '👀 success', message: '👌 product deleted', product: obj });
        } else { 
            return res.status(400).send(`🧟‍♂️ the id ${id} not exist`);
        }
    } catch (err) { 
        console.log(err);
    }
});
//!-> ALL
router.get('/deleted/all', async(req, res) => { 
    try { 
        await fun.deleteAll(model);
        res.send({ status: '👀 success', message: '👌 All deleted'});
    } catch (err) { 
        console.log(err);
    }
});

export default router;