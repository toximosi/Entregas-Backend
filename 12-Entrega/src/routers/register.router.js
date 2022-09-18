import Router from 'express';
const router = Router();
import connexion from '../conexion.js';
import { createHash } from '../utils.js';

import userModel from '../models/users.model.js';

import managerService from '../services/manager.service.js';
const man = new managerService();
import userService from '../services/users.service.js';

router.post('/', async(req, res) => { 
    try { 
        /* const { name, email, password } = req.body; */
        const { name, email } = req.body;
        /* if (!name || !email || !password) { */
        if (!name || !email) {
            return res.status(400).send({ status: 'error', error: 'incomplete information' });
        };
        const exist = await userModel.findOne({ email: email });
        if (exist) return res.status(400).send({ status: 'error', error: "user already exist" });

        const newUser = {
            name,
            email,
            /* password: createHash(password) */
        };
        let result = await userService.create(newUser);
        res.send(newUser);

    } catch (err) { console.log(err) };
});







export default router;