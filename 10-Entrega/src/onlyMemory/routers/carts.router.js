//& import ---------------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
//dirname url
import __dirname from '../../utils.js';//static files
//import { uploader } from '../../utils.js';
// conexion bd

//& DB ----------------------------------------------
import bdMemory from '../conexion.js';
let bd = bdMemory[0].carts;

//data 
import dataIni from '../../json/carts.json' assert {type: "json"};

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
    try { 
        const data = await man.startData(bd, obj);
        
        res.send(`👍 Add data is ok.\n
                  data -> ${JSON.stringify(data)}`)
        console.log(JSON.stringify(bdMemory));
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

/// Create element
router.post('/create', async(req, res) => {
    try { 
       const{id, products} = req.body
            if (!id || !products) { 
                return res.status(400).send({ status: 'error', error: 'incomplete values' });
            }
            let obj = {
                id,
                timestamp: Date.now(),
                products,
            }
        const data = await man.addObj(bd, obj);
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
        const data = await man.getAll(bd);
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
        let obj = await man.getById(bd, id);
        if (obj != '') {
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
//-> Element by ID
router.delete('/deleted/:id', async(req, res) => { 
    try { 
        let id = parseInt(req.params.id);
	    if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
        let exist = await man.existId(bd, id);
        if (exist != "") {
            let obj = await man.getById(bd, id);
            bd = await man.deleteById(bd, id);
            res.send({ status: '👀 success', message: '👌 product deleted', product: obj, bd: bd });
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
        bd = await man.deleteAll(bd);
        console.log(bd)
        res.send({ status: '👀 success', message: '👌 All deleted', bd: bdMemory});
    } catch (err) { 
        console.log(err);
    }
});

export default router;