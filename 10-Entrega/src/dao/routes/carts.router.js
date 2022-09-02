//& import ---------------------------------------------
import { Router } from 'express';
const router = Router();//ejecutamos router para poder usarlo.
//dirname url
import __dirname from '../../utils.js';//static files
import dataIni from '../../json/carts.json' assert {type: "json"};

import services from '../index.js';
const man = services.cartsServices;

//Code ----------------------------------------------
//CRUD
//* CREATE
/// INICIALICE
//add initial data
router.post('/start', async (req, res) => {
    const obj = dataIni;
        const data = await man.startData(obj);
        res.send(data);
});

/// Create element
router.post('/create', async(req, res) => {
    const{ id, products } = req.body;
    if (!id || !products) { 
        return res.status(400).send({ status: 'error', error: 'incomplete values' });
    }
    let obj = {
        id,
        timestamp: Date.now(),
        products,
    }
    const data = await man.addObj(obj);
    res.send(data);
});
//* READ
// ALL
router.get('/', async (req, res) => {
    const data = await man.getAll();
    res.send(data);
});
// Element by id
router.get('/:id', async(req, res) => { 
    let id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
    let obj = await man.getById(id);
    if (obj != '') {
        res.send({ status: '👀 success', message: '👌 product exist', product: obj });
    } else { 
        return res.status(400).send(`🧟‍♂️ the id ${id} not exist`);
    };
});

//* DELETE
//-> Element by ID
router.delete('/deleted/:id', async(req, res) => { 
    let id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
    let exist = await man.existId(id);
    if (exist != "") {
        let obj = await man.getById(id);
        let bd = await man.deleteById(id);
        res.send({ status: '👀 success', message: '👌 product deleted', product: obj, bd: bd });
    } else { 
        return res.status(400).send(`🧟‍♂️ the id ${id} not exist`);
    }
});
//!-> ALL
router.get('/deleted/all', async(req, res) => { 
        let bd = await man.deleteAll();
        console.log(bd)
        res.send({ status: '👀 success', message: '👌 All deleted', bd: bd});
});

export default router;