/* import { UserInsertDTO } from "../DTO/User.dto.js"; */
import { userService, cartService } from "../services/services.js";
import { createHash } from "../utils.js";

const create = async(req,res) =>{
    let {first_name,last_name,password,email,address} = req.body;
    try{
        /* if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"}); */
        /* let user = await userService.getUserByEmail(email);
        if(user) return res.status(400).send({status:"error",error:"El usuario ya existe"}); */
        let cart = await cartService.save({artworks:[]})
        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            email,
            address,
            password:hashedPassword,
            cart:cart._id,
            avatar:``
        }
       /*  const insertUser = new UserInsertDTO(newUser); */
        let result = await userService.save(newUser);
        res.send({status:"success",message:"User registered", result: result})
    }catch(error){
        console.log(error);
        res.status(500).send({status:"error",error:"Internal error",trace:error})
    }
}

export default {
    create
}