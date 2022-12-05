import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

//DIRECTORIOS -------------------------------------------------------------------- INICIO
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//BCRYPTS ------------------------------------------------------------------------ INICIO
export const createHash = async(password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
};

export const isValidPassword = (user, data) => bcrypt.compare(data, user.password);
export const passwordValidation = (user, password) => bcrypt.compare(password, user.password);

export default __dirname;
