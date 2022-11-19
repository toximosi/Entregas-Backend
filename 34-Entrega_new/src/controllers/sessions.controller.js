import { usersService,cartsService } from '../services/index.js';
import { createHash, isValidPassword } from '../utils.js';

import jwt from 'jsonwebtoken';
import config from "../config/config.js";
import MailingService from '../services/mailing.js';

/* const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    age:Number,
    image:String,
    role: {
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    phone:String,
    cart:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Carts'
    }
}) */

const register = async (req, res) => {
    console.log('--> Sesioncontroller register body');
    console.log(req.body);
    /* if (!req.file) return res.status(500).send({ status: 'error', error: 'Error to uploader file' }); */
    if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
        /* image = `${req.protocol}://${req.host}:${process.env.PORT}/images/avatar/avatar.png`; */
        image = `/images/avatar/avatar.png`;
    } else {
        /* image=`${req.protocol}://${req.host}:${process.env.PORT}/images/avatar/${req.file.filename}`; */
        image=`/images/avatar/${req.file.filename}`;
    }
    let {first_name,last_name,email,phone,password,age} = await req.body;
    if(!first_name||!last_name||!email||!phone||!password) return res.status(400).send({status:'error',error:'💀 incomplet values'});
    let exists = await usersService.getUserByEmail(email);
    if(exists) return res.status(400).send({status:'error', error:'the user exist yet'});
    //Anexar el carrito
    const cart = await cartsService.createCart();
    const hashedPassword = await createHash(password);
    let image = "";
    const user ={
        first_name,
        last_name,
        email,
        phone,
        age,
        password: hashedPassword,
        image,
        cart:cart._id
    }
     const result = await usersService.saveUser(user);
    
    
    const mailer = new MailingService();
    
    let mailsend = await mailer.sendSimpleMail({
        from: email,
        to: `toximosi@gmail.com, ${config.session.ADMIN_EMAIL}`,
        subject: 'nuevo registro',
        html: mailer.MailRegister(`${first_name}  ${last_name}`)
    }); 
    
    console.log('--> mailsend'); 
    console.log(mailsend); 
    res.send({status:'success',payload:result})
    res.redirect('/home');
}

const login = async(req, res) => {
    const { email, password } = await req.body;
    if (!email || !password) return res.status(400).send({ status: 'error', error: '💀 incomplet values' });
    /* console.log(password);
    console.log(config.session.ADMIN_PWD);
    console.log(config.session.ADMIN_EMAIL);
    console.log(process.env.ADMIN_PWD) */
    if( email === config.session.ADMIN_EMAIL && password == config.session.ADMIN_PWD) { 
        const sessionAdminUser = {
            name: 'Admin',
            role: 'admin',
            id: '0'
        };
        const token = jwt.sign(sessionAdminUser, config.jwt.SECRET, { expiresIn: '1h' });
        return res.cookie(config.jwt.COOKIE, token, { maxAge: 3600000 }).send({ status: 'success', messages: '👍 Loguin ok' });
    };
    const user = await usersService.getUserByEmail(email);
    if (!user) return res.status(400).send({ status: 'error', error: 'User not exist' });
    const passwordValidation = await isValidPassword(user, password);
    
    if (!passwordValidation) return res.status(400).send({ status: 'error', error: '💀 passwod incorrect' });
    const tokenUser = {
        email: user.email,
        role: user.role,
        name: `${user.first_name} ${user.last_name}`,
        id: user.id,
        cart: user.cart,
    };
    req.session.user = {
        email: user.email,
        role: user.role,
        name: `${user.first_name} ${user.last_name}`,
        id: user.id,
        cart: user.cart,
        image: user.image
    };
    /* req.session.user = tokenUser; */
    const token = jwt.sign(tokenUser,config.jwt.SECRET,{expiresIn:'1h'});
    res.cookie(config.jwt.COOKIE, token, { maxAge: 3600000 })/* .send({ status: 'success', messages: '👍 Loguin ok' }); */
     
    res.redirect('/home');
};

const logout = (req,res) => {
        req.session.destroy();
        res.redirect('/login');
};
    
export default {
    register,
    login,
    logout
};