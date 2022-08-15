import managersServices from "../services/Managers.service.js";
const man = new managersServices();
import __dirname from '../utils.js';//static

//bd -> file
const bd = __dirname + '/public/bd/login.json';

const isAdmin = async(req, res, next) => {

    let isadmin = await man.getAll(bd);
    
    if (isadmin.admin != "false") {
        console.log("eres administrador")
        next();
    } else { 
        res.status(401).send({ error : -1, description: `Route ${req.url} method ${req.method} unauthorized.` });
    }
}
export default isAdmin;