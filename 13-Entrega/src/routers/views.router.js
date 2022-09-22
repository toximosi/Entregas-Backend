import { Router } from "express";
const router = Router();
import faker from 'faker';

import Managers from "../services/manager.service.js";
const fun = new Managers;
import CreateElement from '../services/createElement.service.js';
const create = new CreateElement;
import readFile from '../services/readFiles.service.js';
const file = new readFile;
import __dirname from '../utils.js';
const productJson = __dirname + '/json/products.json';

import usersModel from '../models/users.model.js';
import userService from "../services/users.service.js";
const userFun = new userService();

import productsModel from '../models/products.models.js';

//CODE ------------------------------------------------------
router.get('/', async (req, res) => {
    if (!req.session.user) {
        res.render('register');
    } else {
        res.redirect('products');
    }
});

router.get('/register', async (req, res) => {
    res.render('register');
});

router.get('/login', async (req, res) => {
    res.render('login');
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


export default router;