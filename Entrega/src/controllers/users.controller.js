import mongoose from "mongoose";
import { userService, cartService } from "../services/services.js"
import {UserPresenterDTO} from "../dto/User.dto.js";
import { createHash } from "../utils.js";

const getAll = async (req, res) => {
    console.log('--> User controller getAll');
    try {
        const result = await userService.getAll();
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
        const params = await req.params;
        const result = await userService.getBy(params);
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
        let { first_name, last_name, password, email, address, role } = req.body;
        /* if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"}); */
        let user = await userService.getUserByEmail(email);
        if (user) return res.status(400).send({ status: "error", error: "El usuario ya existe" });
        let cart = await cartService.save({ product: [] })
        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            password: hashedPassword,
            email,
            role,
            image: '/images/avatar/avatar.png',
            address,
            cart: cart._id,
        }
        /* const insertUser = new UserInsertDTO(newUser); */
        let result = await userService.save(newUser);
        let message = { status: "success", message: "👍 User create", function: '👩‍🚀 User controller create', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User controller create', trace: error };
        console.log(message);
        res.status(500).send(message);
    }
};

const deleteById = async (rec, req) => {
    console.log('--> User controller deleteById ');
    try {
        const param = req.paramas;
        console.log('req.params');
        console.log(req.params);
        console.log('param')
        console.log(param)
        const result = await userService.deleteBy(param);
        let message = { status: "success", message: `👍 User ${id} delete `, function: '👩‍🚀 User deleteById ', payload: result };
        console.log(message);
        res.status(200).send(message);
    } catch (error) {
        let message = { status: "error", error: "💀 Internal error", function: '👩‍🚀 User deleteById ', trace: error };
        console.log(message);
    };    
};

export default {
    getAll,
    getBy,
    save,
    deleteById
}