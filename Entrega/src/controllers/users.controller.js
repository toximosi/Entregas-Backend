import mongoose from "mongoose";
import { userService, cartService, productService } from "../services/services.js"
import {UserPresenterDTO} from "../dto/User.dto.js";
import { createHash } from "../utils.js";

const getAll = async (req, res) => {
    console.log('--> User controller getAll');
    try {
        const result = await userService.getAll();
        //COMPROBACION -------------------------------------------------
        if (!result || result.length == 0) { 
            let message = { status: "without result", message: "🌪 There are not any User", function: '👩‍🚀 User controller getAll'};
            console.log(message);
            res.status(200).send(message);
        }
        //----------------------------------------------------------------
        /* const users = result.map(u=>new UserPresenterDTO(u));
        res.send({ users }); */
        let message = { status: "success", message: "👍 Users find", function: '👩‍🚀 User controller getAll', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User controller getAll', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const getBy = async (req, res) => {
    console.log('--> User controller getBy');
    try {
        const param = await req.params;
        /* if(!params || params == "" || params == undefined) console.log('vaya')*/
        const result = await userService.getBy(param); 
        //COMPROBACION -------------------------------------------------
        if (!result || Object.keys(result).length == 0) { 
            let message = { status: "without result", message: "🌪 There are not any User", function: '👩‍🚀 User controller getAll'};
            console.log(message);
            res.status(200).send(message);
        }
        //----------------------------------------------------------------
        /* const users = result.map(u=>new UserPresenterDTO(u));
        res.send({ users }); */
        let message = { status: "success", message: "👍 Users find", function: '👩‍🚀 User controller getBy', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User controller getBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    };
};

const save = async (req, res) => {
    console.log('--> User controller create');
    try {
        console.log('req.file')
        console.log(req.file)
        let { first_name, last_name, password, age, phone, email, address, role } = await req.body;
        if(!first_name || !last_name || !password || !email ) return res.status(400).send({status:'error', error:'💀 incomplet values', function: '👩‍🚀 User controller create',});
        //if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"});
        let image = " ";
        if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
            image = `/images/avatar/avatar.png`;
        } else {
            image =`/images/avatar/${req.file.filename}`;
        }
        let user = await userService.getBy({email:email});
        if (user) return res.status(400).send({ status: "error", error: `💀 The user with email ${email} exist`, function: '👩‍🚀 User controller save' });
        
        let cart = await cartService.save({ product: [] })
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
        let message = { status: "success", message: "👍 User create", function: '👩‍🚀 User controller save', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User controller save', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const updateBy = async (req, res) => {
    console.log('--> User controller updateBy');
    try {
        const param = req.params;
        let { first_name, last_name,email, address, role } = req.body;
        const data = {
                first_name,
                last_name,
                email,
                role,
                image: '/images/avatar/avatar.png',
                address
        }
        const result = await userService.updateBy(param, data);
        let message = { status: "success", message: `👍 User ${param} update`, function: '👩‍🚀 User controller updateBy', change: data};
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User controller updateBy', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const deleteBy = async (req, res) => {
    console.log('--> User controller deleteById ');
    try {
        const param = await req.params;
        const user = await userService.getBy(param);
        const cart = await cartService.getBy({ _id: user.cart });
        const result = await userService.deleteBy(param);
        const deletecart = await cartService.deleteBy({_id: cart._id})//borrar cart relacionada con el usuario
        let message = { status: "success", message: `👍 User ${JSON.stringify(param)} and cart ${JSON.stringify(user.cart )} delete `, function: '👩‍🚀 User deleteById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User deleteById ', trace: error };
        console.log(message);
    };
};

const userInfoBy = async(req, res) => { 
    console.log('--> User controller userInfoBy');
    try {
        const id = req.params;
        console.log('id')
        console.log(id)
        const user = await userService.getBy(id);
        const cart = await cartService.getBy(user.cart);
        console.log('cart')
        console.log(cart)
        let productInfo = []
        let count = 0;
        let productExten;
        console.log("cart.products")    
        console.log(cart.products[0])    
        console.log(cart.products[0].id)    

        let p = await productService.getBy({_id: cart.products[0].id})
        /* await cart.products.map((e) => { 
console.log('e')
            console.log(e)
            let p =  productService.getBy({ id: e.id });
            console.log('p')
            console.log(p)
            }
        ) */

        /* cart.products.forEach(e => {
            
            console.log('e')
            console.log(e.id)

            
            count++;
        }); */


        let data = user;
        data.cart = cart;


        /* console.log('data');
        console.log(data); */

        
        /* await data.forEach(e => {
            console.log('e.cart')
            console.log(e.cart)
            cart = cartService.getBy(e.cart);

        }); */





        /* console.log(info) */
        /* let message = { status: "success", message: `👍 User have all info`, function: '👩‍🚀 User userInfo', payload: info };
        console.log(message);
        res.status(200).send(message); */
        } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User userInfo', trace: error };
        console.log(message);
    };

}

const userInfo = async (req, res) => { 

}
export default {
    getAll,
    getBy,
    save,
    updateBy,
    deleteBy,
    userInfo,
    userInfoBy,
}