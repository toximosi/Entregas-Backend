import { Router } from "express";
const router = Router();

import __dirname from '../utils.js';

//CODE ------------------------------------------------------
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



export default router;