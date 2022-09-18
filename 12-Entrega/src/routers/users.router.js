import { Router } from "express";
const router = Router();

import conexion from '../conexion.js';

//& DB ----------------------------------------------
import faker from 'faker';

import usersModel from '../models/users.model.js';
const model = usersModel;

//data 
import dataIni from '../json/users.json' assert {type: "json"};

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
        faker.locale = 'es';
        const { nombre, email } = await req.body;
        const { name , image, lorem } = faker;

        if (!nombre || !email) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values' });
        }
        let obj = {
            id : email,
            timestamp: Date.now(),
            nombre:nombre,
            apellido: name.lastName(),
            email,
            edad: 0,
            password: "patata",
            alias: lorem.text(),
            avatar: image.avatar()
        }
        const data = await fun.addObj(model, obj);
        res.send(`👍 Add data is ok.\n
                  data -> ${data}`);

    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});

export default router;