//& import ---------------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
//dirname url∫
import __dirname from '../../utils.js';//static files
//import { uploader } from '../../utils.js';
// conexion bd
import database from "../conexion.js";

//& DB ----------------------------------------------
const collection = 'carts';//!CHANGE
const query = database.collection(collection);

//data 
import dataIni from '../../json/carts.json';//!CHANGE!!
const dataStart = JSON.parse(dataIni); 

//function
import ManagersServices from "../services/manager.service.js";
const man = new ManagersServices();



//Code ----------------------------------------------
//CRUD
//* CREATE
/// INICIALICE
//add initial data
router.post('/start', async (req, res) => {
    const obj = dataIni;
    console.log(obj);
    try { 
        const data = await man.startData(model, obj);
        res.send(`👍 Add data is ok.\n
                  data -> ${data}`)
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

/// Create element
router.post('/create', async(req, res) => {
    try { 
        const{id, name, description, code , image, price, stock} = req.body
        if (!id || !name || !description || !code || !image || !price || !stock) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values' });
        }
        let obj = {
            id,
            timestamp: Date.now(),
            name,
            description,
            code,
            image,
            price,
            stock,
        }
        const data = await man.addObj(model, obj);
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
        const data = await man.getAll(model);
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
        let data = await man.getById(model, id);
        if (data != '') {
            res.send({ status: '👀 success', message: '👌 product exist', product: obj });
        } else { 
            return res.status(400).send(`🧟‍♂️ the id ${id} not exist`);
        }
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});


//* UPLOAD
// Element by ID
router.put('/put/:id', async(req, res) => { 
    try { 

    } catch (err) { 
        console.log(err);
    }
});



//* DELETE
router.delete('/deleted/:id', async(req, res) => { 
    try { 
        let id = parseInt(req.params.id);
	    if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
        let exist = await man.existId(model, id);
        if (exist != "") {
            let obj = man.getById(model, id);
            await man.deleteById(model, id);
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
        await man.deleteAll(model);
        res.send({ status: '👀 success', message: '👌 All deleted'});
    } catch (err) { 
        console.log(err);
    }
});

export default router;