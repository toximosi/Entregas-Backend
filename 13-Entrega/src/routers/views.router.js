import { Router } from "express";
const router = Router();

import Managers from "../services/manager.service.js";
import CreateElement from '../services/createElement.service.js';
import readFile from '../services/readFiles.service.js';
import __dirname from '../utils.js';
const productJson = __dirname + '/json/products.json';
import userService from '../models/users.model.js';
import productsModel from '../models/products.models.js';

//CODE ------------------------------------------------------
/* router.get('/', async (req, res) => {
    if (!req.session.user) {
        res.render('register');
    } else {
        res.redirect('products');
    };
}); */

router.get('/',(req,res)=>{
    if(!req.session.user) return res.redirect('/login');
    res.render('home');
});

router.get('/register', async (req, res) => {
    if (req.session.user) return res.render('data', {user: req.session.user})
    res.render('register');
});

router.get('/data', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('data', { user: req.session.user })
});

router.get('/login', (req, res) => {
    if (req.session.user) return res.redirect('/data');
    let aviso = "no estas logeado, no puedes acceder a la data";
    res.render('login', {aviso});
});

router.get('/register', (req, res) => {
    if (req.session.user) return res.redirect('/data');
    let aviso = "no estas logeado, no puedes acceder a la data";
    res.render('register', {aviso});
});

router.get('/loginfail', (req, res) => {
    if (req.session.user) return res.redirect('/data');   
    res.render('loginfail');
});
router.get('/logout', (req, res) => {
    if (!req.session.user) return res.redirect('/login');   
    res.render('logout');
});

/* router.get('/registerfail', async (req, res) => {
    console.log('sometimes is wrong');
    res.status(500).send({ status: 'error', error: '' });
}); */

/* router.get('/login', passport.authenticate('login', {failureRedirect:'appi/sessions/loginfail'}), async (req, res) => {
    res.sessions.user = {
        nombre: req.user.nombre,
        email: req.user.email,
        id:req.user._id
    }
    res.send({ status: 'success', payload: req.session.user });
}); */

/* router.get('/loginfail', async (req, res) => {
    res.status(500).send({ status: 'error', error: 'Error in login' });
}); */




/* router.get('/products', async (req, res) => {
    try { 
        if (!req.session.user) {
            res.redirect('/');
        } else { 
            let Arr = await fun.getAll(productsModel);
            Arr = JSON.parse(JSON.stringify(Arr));
            let user = req.session.user.nombre;
            console.log(user);
            res.render('products', { Arr, user });
        };
    } catch (err) { 
        res.send(`💣  Error: ${err}`);
    };
}); */


export default router;