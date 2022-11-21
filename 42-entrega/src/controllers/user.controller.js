import { userDtoPresenter } from "../dao/dto/user.dto.js";
import { usersService } from "../services/index.js";

const getUsers = async(req,res)=>{
    let result = await usersService.getUsers();
    const users = result.map(u => new userDtoPresenter(u));
    res.send({ status: "success", payload: users })
}

const getUserById = async(req,res)=>{
    const {uid} = req.params;
    const user = await usersService.getUserById(uid);
    if(!user) return res.status(404).send({status:"error",error:"Usuario no encontrado"})
}

export default {
    getUsers,
    getUserById
}