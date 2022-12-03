import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import bcrypt from 'bcrypt';


/* Bcrypts */
export const createHash = async(password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
};
export const isValidPassword = (user, data) => bcrypt.compare(data, user.password);

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
export const uploader = multer({ storage });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
