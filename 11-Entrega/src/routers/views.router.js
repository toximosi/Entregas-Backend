import { Router } from "express";
const router = Router();
import Managers from "../services/manager.service.js";
const man = new Managers;
import CreateElement from '../services/createElement.service.js';
const create = new CreateElement;
import readFile from '../services/readFiles.service.js';
const file = new readFile;
import __dirname from '../utils.js';
const bdJson = __dirname + '/json/products.json';

//CODE ------------------------------------------------------
router.get('/api/productos-test', async (req, res) => {
    try {
        
        let areData = await file.read(bdJson);
        let Arr = [];
        if (areData.length == 0) { 
            Arr = create.products(5) ;
            await file.write(bdJson, Arr);
        } else {
            Arr = areData;
        } 
        res.render('products', {Arr});
    } catch (err) { console.log(err) };
});

export default router;