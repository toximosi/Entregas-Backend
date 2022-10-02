//import
import { dirname } from 'path';
import { fileURLToPath } from 'url';
/* import multer from 'multer'; */
import bcrypt from 'bcrypt';



/* Bcrypts */
export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

//CODE
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname+'/public/img');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})

//Export
/* export const uploader = multer({ storage }); */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default __dirname;
