//gestor de rutas estáticas
//tiene que estar al mimso nivel que app.
// es una implemantación estandar
//---------------------------------------------------

//import
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname+'/public/img');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})

//Export
export const uploader = multer({storage});
export default __dirname;
