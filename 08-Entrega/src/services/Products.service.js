//import
import __dirname from '../utils.js';//static

//clases 
import readfilesServices from './ReadFile.service.js';
const refi = new readfilesServices();

import managersService from './Managers.service.js';
const man = new managersService();

//json -> file
const json = __dirname + '/json/products.json';

//code
class Products{ 
    //constructor
    constructor() { };
    //Metodos

    addData = async () =>{ 
    
    }

}

//Export -------------------------
export default Products;