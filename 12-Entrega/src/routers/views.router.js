import { Router } from "express";
const router = Router();
import faker from 'faker';

import Managers from "../services/manager.service.js";
const fun = new Managers;
import CreateElement from '../services/createElement.service.js';
const create = new CreateElement;
import Normalize from "../services/normalize.service.js";
const norm = new Normalize;
import readFile from '../services/readFiles.service.js';
const file = new readFile;
import __dirname from '../utils.js';
const productJson = __dirname + '/json/products.json';
import usersModel from '../models/users.model.js';
const model = usersModel;
const messagesJson = __dirname + '/json/messages.json';
const messagesNormJson = __dirname + '/json/messagesAnidados.json';

import productsModel from '../models/products.models.js';

//CODE ------------------------------------------------------
router.get('/', async (req, res) => {
    if (!req.session.user) {
        res.render('register');
    } else {
        res.redirect('products');
    }
});

router.get('/products', async (req, res) => {
    try { 
        if (!req.session.user) {
            res.redirect('/');
        } else { 
            let Arr = await fun.getAll(productsModel);
            Arr = JSON.parse(JSON.stringify(Arr));
            let user = req.session.user.nombre;
            console.log(user);
            res.render('products', { Arr, user });
        }
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    }
});
//prueba de redirección
router.get('/redirecion', async (req, res) => {
    res.redirect('http://google.es');
});
/* router.get('/api/productos-test', async (req, res) => {
    try {
        let dataIni = await file.read(productJson);
        let Arr = [];
        if (dataIni.length == 0) { 
            Arr = create.products(5) ;
            await file.write(productJson, Arr);
        } else {
            Arr = dataIni;
        } 
        console.log(Arr)
        res.render('products', {Arr});
    } catch (err) { console.log(err) };
});
 */

router.get('/api/normalize', async (req, res) => {
    try {
        let Arr = await file.read(messagesNormJson);
        let Norm = await norm.menssage(Arr);
        res.render('normalize', { Arr, Norm})
    } catch (err) { console.log(err);}
});

export default router;