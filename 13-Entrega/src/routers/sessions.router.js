import Router from 'express';
const router = Router();
import { createHash } from '../utils.js';

import managerService from '../services/manager.service.js';
const fun = new managerService();

import userModel from '../models/users.model.js';
import userService from '../services/users.service.js';
const userFun = new userService();

/* app.use('/api/sessions', sessionsRouter); */

router.post('/register', async (req, res) => {
    try {
        let { nombre, email, password } = await req.body;
        if (!nombre || !email) return res.status(400).send({ status: 'error', error: 'incomplete information' });
        if (password == "") { password = "PATATA" };    
        const obj = { nombre, email, password }
    
        const newUser = await userFun.createUser(userModel, obj);
        console.log('newUser');
        console.log(newUser);
        if (newUser != false) {
            req.session.user = {
                nombre,
                email,
                password,
                rol: "user"
            };
            res.redirect('/products');
        } else {
            res.redirect('/login');
        }
    } catch (err) { console.log(err) };
});
router.get('/register', async (req, res, next) => {
  
});


router.post('/login', async(req, res) => { 
    try { 
        /* const { name, email, password } = req.body; */
        const { name, email, password } = req.body;
        /* if (!name || !email || !password) { */
        if (!name || !email) return res.status(400).send({ status: 'error', error: 'incomplete information' });
        
        
        const exist = await userModel.findOne({ email: email });
        if (exist) return res.status(400).send({ status: 'error', error: "user already exist" });

        const newUser = {
            name,
            email,
            password: createHash(password)
        };
        let result = await userService.create(newUser);
        res.send(newUser);

    } catch (err) { console.log(err) };
});

 







export default router;