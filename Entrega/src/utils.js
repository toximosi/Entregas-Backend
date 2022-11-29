import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import bcrypt from 'bcrypt';

//DIRECTORIOS -------------------------------------------------------------------- INICIO
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//BCRYPTS ------------------------------------------------------------------------ INICIO
export const createHash = async(password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
};

//MULTER ------------------------------------------------------------------------ INICIO
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

export const uploader = multer({ storage });
export const isValidPassword = (user, data) => bcrypt.compare(data, user.password);
export const passwordValidation = (user, password) => bcrypt.compare(password, user.password);

export default __dirname;
