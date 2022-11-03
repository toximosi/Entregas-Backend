import Managers from "./manager.service.js";
const fun = Managers;

//& DB ----------------------------------------------
import cartsModel from '../models/carts.model.js';

/* const cartsSchema = mongoose.Schema({
        id: Number,
		timestamp: Date,
		userid: Number,
		products: Array
}); */


class CartsService { 
    
    constructor() { 
        this.model = cartsModel;
    }
   
    //* CRUD
    //CREATE
    
    createCartEmpty = async (id) => {
        try {
            let obj = {
                id,
                timestamp: Date.now(),
                products: []
            }
            //!Revisar si ya existe el carrito.
            let data = await this.model.insertMany(obj);
            return data;
        } catch (err) {
            console.log(`🚩 Error in Create cart empty.\n
                        fuction -> createCartEmpty.\n 
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem: createCart CartService');
    };

    /* addObj = async (obj) => {
        try {
            let data = await this.model.insertMany(obj);
            console.log('👍 add inicial data is ok: addObj');
            return data;
        } catch (err) {
            console.log(`🚩 Error in Add element.\n
                        fuction -> addObj.\n 
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem: addObj CartService');
    }; */
    addProduct = async (id, products) => { 
        console.log("first")

    }




};

export default CartsService;