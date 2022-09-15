import { Router } from "express";
const router = Router();
import Managers from "../services/manager.service.js";
const man = new Managers;
import CreateElement from '../services/createElement.service.js';
const create = new CreateElement;
import Normalize from "../services/normalize.service.js";
const norm = new Normalize;
import readFile from '../services/readFiles.service.js';
const file = new readFile;
import __dirname from '../utils.js';
const productJson = __dirname + '/json/products.json';
const usersJson = __dirname + '/json/users.json';
const messagesJson = __dirname + '/json/messages.json';
const messagesNormJson = __dirname + '/json/messagesAnidados.json';

//CODE ------------------------------------------------------
router.get('/', async (req, res) => { 
    res.render('index');
})
router.get('/api/productos-test', async (req, res) => {
    try {
        let dataIni = await file.read(productJson);
        let Arr = [];
        if (dataIni.length == 0) { 
            Arr = create.products(5) ;
            await file.write(productJson, Arr);
        } else {
            Arr = dataIni;
        } 
        res.render('products', {Arr});
    } catch (err) { console.log(err) };
});


router.get('/api/normalize', async (req, res) => {
    try {
        let Arr = await file.read(messagesNormJson);
        let Norm = await norm.menssage(Arr);
        res.render('normalize', { Arr, Norm})
    } catch (err) { console.log(err);}
});


/* router.get('/chat', async (req, res) => {

        res.render('chats');
}); */

export default router;