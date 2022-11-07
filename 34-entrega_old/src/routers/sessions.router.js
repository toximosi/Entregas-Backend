import Router from 'express';
const router = Router();

import passport from 'passport';
import jwt from 'jsonwebtoken';
import { isValidPassword } from '../utils.js'

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

router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/loginerror' }), async (req, res) => {
    req.session.user ={
        nombre:req.user.nombre,
        email:req.user.email,
        id:req.user._id
    }
    /* res.send({ status: "success", payload: req.user._id }); */
    console.log('login OK');
    return res.redirect('http://google.com');
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

export default router;