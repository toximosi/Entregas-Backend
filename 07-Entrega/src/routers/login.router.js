//import ------------------------------------
import e, { Router } from 'express';
const router = Router();
import __dirname from '../utils.js';
//class
import managersServices from '../services/Managers.service.js';
const man = new managersServices();
//function -----------

//bd -> file
const bd = __dirname + '/public/bd/login.json';

router.get('/', async (req, res) => { 

    let data = await man.getAll(bd);
    res.send(data);

})

router.put('/', async (req, res) => { 

    let admin = req.body;
    res.send(admin);

    await man.updateBd(bd, admin);

})

export default router;