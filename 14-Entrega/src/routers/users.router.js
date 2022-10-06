import { Router } from "express";
const router = Router();

//& DB ----------------------------------------------
import faker from 'faker';
import conexion from '../conexion.js';

import usersModel from '../models/users.model.js';
const model = usersModel;
import userService from "../services/users.service.js";
const userfun = new userService();
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
router.post('/register', async (req, res, next) => {
    
    /* try { 
        faker.locale = 'es';
        const { nombre, email, password } = await req.body;
        const { name , image, lorem } = faker;

        if (!nombre || !email) { 
             return res.status(400).send({ status: 'error', error: 'incomplete values' });
        }
        const exist = await usersModel.findOne({ email: email });
        if (exist) { 
            let error = "el usuario ya existe";
            res.render('register', { error });
            return res.status(400).send({ status: "error", error: "User alredy exists" })
        } else { 
            let obj = {
                id : email,
                timestamp: Date.now(),
                nombre:nombre,
                apellido: name.lastName(),
                email,
                edad: 0,
                password: password,
                alias: lorem.text(),
                avatar: image.avatar()
            }
            req.session.user = {
                nombre,
                email,
                rol: "user"
            };
            res.redirect('/products');
        };
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    } */
});
router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


export default router;