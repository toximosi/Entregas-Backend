import multer from 'multer';
import __dirname from '../utils.js';

//storage donde se almacenan los archivos

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname+'/public/images/'+folder)
    },
    filename:function(req,file,cb){
        cb(null,`${file.originalname}-${Date.now()}`);
    }
})

const uploader = multer({storage: storage});
export default uploader;
