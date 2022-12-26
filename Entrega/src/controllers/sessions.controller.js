/* import { UserInsertDTO } from "../DTO/User.dto.js"; */
import { userService, cartService } from "../services/services.js";
import { createHash, isValidPassword } from "../utils.js";
import jwt from 'jsonwebtoken';
import config from "../config/config.js";

import MailingService from '../middlewares/mailing.js';

const register = async (req, res) => {
    console.log('--> Session controller register');
    try {
        console.log('req.body')
        console.log(await req.body)

        console.log('req.file');
        console.log(req.file);

        let { first_name, last_name, password, age, phone, email, address, role } = await req.body;
        if(!first_name || !last_name || !password || !email ) return res.status(400).send({status:'error', error:'💀 incomplet values', function: '🔑 Session controller register',});
        /* if(!req.file) return res.status(500).send({status:"error",error:"Can not upload avatar image"}); */
        let image = " ";
        if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
            image = `/images/avatar/avatar.png`;
        } else {
            image =`/images/${req.file.filename}`;
        }
        let user = await userService.getBy({email:email});
        if(user) return res.status(400).send({status:"error",error:"User exist yet"});
        let cart= await cartService.save({artworks:[]})
        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            password: hashedPassword,
            email,
            age,
            role,
            phone,
            address,
            image,
            cart: cart._id,
        }
        //const insertUser = new UserInsertDTO(newUser);
        let result = await userService.save(newUser);
        let message = { status: "success", message: "👍 User create", function: '🔑 Session controller register', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🔑 Session controller register', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
}

const login = async (req, res) => {
    console.log('--> Session controller login');
    try{
        const { email, password } = await req.body;
        if (!email || !password) return res.status(400).send({ status: 'error',function: '🔑 Session controller login', error: '💀 incomplet values' });
        if( email === config.session.ADMIN_EMAIL && password == config.session.ADMIN_PWD) { 
            const sessionAdminUser = {
                name: 'Admin',
                role: 'admin',
                id: '0'
            };
            const token = jwt.sign(sessionAdminUser, config.jwt.SECRET, { expiresIn: '1h' });
            return res.cookie(config.jwt.COOKIE, token, { maxAge: 3600000 }).send({ status: 'success', messages: '👍 Loguin ok' });
        };
        const user = await userService.getBy({email});
        console.log('user');
        console.log(user);
        if (!user) return res.status(400).send({ status: 'error', error: 'User not exist' });
        const passwordValidation = await isValidPassword(user, password);
        
        if (!passwordValidation) return res.status(400).send({ status: 'error', error: '💀 passwod incorrect' });
        const tokenUser = {
            email: user.email,
            role: user.role,
            name: `${user.first_name} ${user.last_name}`,
            id: user._id,
            cart: user.cart,
        };
        console.log('req.session');
        console.log(req.session);
        console.log('config.jwt.SECRET');
        console.log(config.jwt.SECRET);
        req.session.user = {
            email: user.email,
            role: user.role,
            name: `${user.first_name} ${user.last_name}`,
            id: user._id,
            cart: user.cart,
            image: user.image
        };
        const token = jwt.sign(tokenUser,config.jwt.SECRET,{expiresIn:'1h'});
        res.cookie(config.jwt.COOKIE, token, { maxAge: 3600000 })
        let message = { status: "success", message: "👍 User login", function: '🔑 Session controller login'};
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '🔑 Session controller login', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const logout = (req,res) => {
        req.session.destroy();
        res.redirect('/login');
};

export default {
    register,
    login,
    logout
}