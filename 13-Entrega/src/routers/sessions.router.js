import Router from 'express';
const router = Router();

import passport from 'passport';
import jwt from 'jsonwebtoken';
import {isValidPassword} from '../utils.js'

import managerService from '../services/manager.service.js';
import userModel from '../models/users.model.js';
import userService from '../services/users.service.js';
const userFun = userService;

/* app.use('/api/sessions', sessionsRouter); */

router.post('/register', passport.authenticate('register',
    { failureRedirect: '/api/sessions/registerfail' }),
    async (req, res) => {
    console.log(req.user);
    res.send({status:"success",payload:req.user._id})
})

router.get('/register',passport.authenticate('register',{failureRedirect:'/api/sessions/registerfail'}), async (req, res) => {
    res.send({ status: "success", payload: req.user._id });
});

router.get('/registerfail', async (req, res) => {
    console.log("Register failed");
    res.status(500).send({ status: "error", error: "Register failed" });
});

router.post('/login',passport.authenticate('login',{failureRedirect:'/api/sessions/loginerror'}),async(req,res)=>{
    req.session.user ={
        nombre:req.user.nombre,
        email:req.user.email,
        id:req.user._id
    }
    /* res.send({ status: "success", payload: req.user._id }); */
    res.redirect('/data');
})
router.get('/loginerror', async(req, res) => {
    console.log("login failed");
    res.status(500).send({ status: "error", error: "Login failed" })
    res.redirect('loginfail');
});

router.get('/logout', async(req, res) => {
    req.session.destroy(error => {
        if (error) return res.status(500).send({ status: 'error', message: 'Could not logout' })
    })
    res.redirect('/login');
});

router.get('/github', passport.authenticate('github', { scope: [] }), async (req, res) => { });

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    req.session.user = {
        nombre: req.user.nombre,
        email: req.user.email,
        id: req.user._id
    };
    res.redirect('/data');
});

/* router.post('/register', async (req, res) => {
    let { nombre, email, password } = await req.body;
    if (!nombre || !email) return res.status(400).send({ status: 'error', error: 'incomplete information' });
    if (password == "") { password = "1234" };    
    const obj = { nombre, email, password }
    
    const newUser = await userModel.createUser(obj);
    
    if (newUser != false) {
        req.session.user = { nombre, email, password, rol: "user" }; 
    } else {
        
    };
}); */

/* router.post('/login', passport.authenticate('login',{failureRedirect:'/api/sessions/loginfail'}), async(req, res) => { 
    req.session.user ={
        nombre:req.user.nombre,
        email:req.user.email,
        id:req.user._id
    }
    res.send({ status: "success", payload: req.user._id });
}); */


/* router.post('/loginjwt', async (req, res) => { */
/* router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).send({status:"error", error: "incomplete values"})
    let user = await userModel.findOne(email);
    if (!user) return res.status(400).send({ status: "error", error: "User doesn't exist" });
    if (!isValidPassword(user, password)) return res.status(400).send({ status: "error", error: "Invalid Password" });
    req.session.user = {
        nombre: req.user.nombre,
        email: req.user.email,
        id: req.user._id
    };
    res.send({ status: 'success', payload: req.session.user });
    let token = jwt.sign({ nombre: user.nombre, email: user.email, id: user._id }, "CoderJWTSecret007", { expiresIn: "24h" })
    res.send({ status: "success", token });
}); */
/* router.get('/current', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        jwt.verify(token, "CoderJWTSecret", (err, data) => {
            console.log(data);
            res.send(data);
        })
    } catch {
        res.send("error")
    }
}); */


export default router;