//import
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export default __dirname;
