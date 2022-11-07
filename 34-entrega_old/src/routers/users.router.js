import { Router } from "express";
const router = Router();

//& DB ----------------------------------------------
import usersModel from '../models/users.model.js';
const model = usersModel;

//function
import FuctionsServices from "../services/manager.service.js";
const fun = new FuctionsServices();
import userService from "../services/users.service.js";
const userfun = new userService();
//data 
import dataIni from '../json/users.json' assert {type: "json"};

/* app.use('/api/users', usersRouter ); */
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
router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

/* router.get('/information', async (req, res) => {
    console.log('hola')
    const userid = await req.body;
    let data = fun.getById(model, userid);
    console.log(data);
    




}); */


export default router;