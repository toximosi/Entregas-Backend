//& import ---------------------------------------------
import e, { Router } from 'express'; 
const router = Router();//ejecutamos router para poder usarlo.
import __dirname from '../../utils.js';//static

// conexion bd
//& DB ----------------------------------------------
import conexion from '../conexion.js';
const bd = __dirname + conexion +'products.json';

//data 
import dataIni from '../../json/products.json' assert {type: "json"};

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
            await man.startData(bd, obj);
            res.send(`👍 Add data is ok.\n
                    data -> ${JSON.stringify(obj)}`)
            console.log(JSON.stringify(bdMemory));
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
            const data = await man.addObj(bd, obj);
            res.send(`👍 Add data is ok.\n
                    data -> ${JSON.stringify(data)}`);

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
    });

    // Element by id
    router.get('/:id', async(req, res) => { 
        try { 
            let id = parseInt(req.params.id);
            if (isNaN(id)) return res.status(400).send('🧟‍♂️ the params is not a number');
            let data = await man.getById(bd, id);
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
            let exist = await man.existId(bd, id);
            if (exist != '') {
                let obj = await man.getById(bd, id);
                await man.deleteById(bd, id);
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
            await man.deleteAll(bd);
            res.send({ status: '👀 success', message: '👌 All deleted'});
        } catch (err) { 
            console.log(err);
        }
    });

export default router;