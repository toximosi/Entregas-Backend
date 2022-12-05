/* import { UserInsertDTO } from "../DTO/User.dto.js"; */
import { userService, cartService } from "../services/services.js";
import { createHash } from "../utils.js";

const register = async (req, res) => {
    console.log('--> Session controller register');
    try {
        console.log('req.body')
        console.log(await req.body)

        console.log('req.file');
        console.log(req.file);
        let { first_name, last_name, password, age, phone, email, address, role } = await req.body;
        if(!first_name || !last_name || !password || !email ) return res.status(400).send({status:'error', error:'💀 incomplet values', function: '🔑 Session controller register',});
        if(!req.file) return res.status(500).send({status:"error",error:"No se pudo cargar el avatar"});
        let image = " ";
        if (!req.file || req.file == "" || req.file == undefined || req.file == 'undefined' || req.file == null || req.file == 'null') { 
            image = `/images/avatar/avatar.png`;
        } else {
            image =`/images/avatar/${req.file.filename}`;
        }
        let user = await userService.getBy({email:email});
        if(user) return res.status(400).send({status:"error",error:"El usuario ya existe"});
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

export default {
    register
}