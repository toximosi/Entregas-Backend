//gestor de rutas estáticas
//tiene que estar al mimso nivel que app.
// es una implemantación estandar
//---------------------------------------------------

//import
import {fileURLToPatch} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPatch(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
