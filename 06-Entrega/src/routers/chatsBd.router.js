//imports -------------------------------
import { Router } from "express";
const router = Router();

import managersServices from '../services/Managers.service.js';
const man = new managersServices();

import __dirname from '../utils.js';//static

//bd -> file
const bdChat = __dirname + '/public/bd/chats.json';

//bchatFile-> file
/* const chatFile = __dirname + '/public/bd/chats.json'; */

//Routers -------------------------------

router.get('/', async (req, res) => {
    let data = await man.getAll(bdChat);
	res.send(data);
});

router.post('/', async(req, res) =>{
    const { id, user, date, message } = req.body;
    
    if (!id ||!user || !date || !message) return res.status(400).send({ status: '👀 error', error: '🙇‍♂️ incomplete values' });
    
    let chat = { id, user, date, message };

    await man.create(bdChat, chat);
})


//export --------------------------------
export default router;