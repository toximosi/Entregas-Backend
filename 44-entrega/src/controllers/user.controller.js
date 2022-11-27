import config from '../config/config.js';

import { usersService, cartsService } from '../services/services.js';
import { createHash, isValidPassword } from '../utils.js';


const create = async (req, res) => {
    console.log('--> run user create');
    console.log(req.body);
    /* if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' }); */
    let { first_name, last_name, email, phone, password, age } = await req.body;
    if (!first_name || !last_name || !email || !phone || !password) return res.status(400).send({ status: 'error', error: '💀 incomplet values' });
    /* let exists = await usersService.getBy({ email });
    if (exists) {
            console.log({ status: 'error', error: 'the user exist yet' })
            return res.status(400).send({ status: 'error', error: 'the user exist yet' });
    } */
    //Anexar el carrito
    const cart = await cartsService.create({ product: [] });
    const hashedPassword = await createHash(password);
    const user = {
        first_name,
        last_name,
        email,
        phone,
        age,
        password: hashedPassword,
        image: `/images/avatar/avatar.png`,
        cart: cart._id
    }
    const result = await usersService.create(user);

    res.send({ status: 'success', payload: result })
};


const getAll = async (req, res) => {
    console.log('--> Run user getAll');

    let result = await usersService.getAll();
    res.send({ status: "success", payload: result })
}

const getBy = async (req, res) => {
    console.log('--> Run user getBy');

    const data = req.params;
    const id = data.id;
    
    const result = await usersService.getBy({_id:id});
    if (!result) return res.status(404).send({ status: "error", error: "User don't find" });
    res.send({ status: "success", payload: result })
}

export default {
    create,
    getAll,
    getBy
}