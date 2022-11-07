import Managers from "./manager.service.js";
const fun = new Managers();

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

    //ADD
    addProduct = async (id, products) => { 
        try { 
            let productNew = false;
            let productId = "";
            let data = await this.model.find({ "id": id });

            if (data.length <= 0) {
                console.log(`dont't find cart with id: ${id}`);
                let obj = {
                    id,
                    timestamp: Date.now(),
                    /* userid, */
                    products
                }
                const dataNew = await fun.addObj(this.model, obj);
                return dataNew;
            } else {
                let existProduct = await this.model.find(
                    { $and: [{ 'id': id }, { 'products.id': products.id }] });
                
                if (existProduct <= 0) {
                    await this.model.updateOne(
                        { 'id': id },
                        { $push: { 'products': products } });
                } else { 
                    let cart = await this.model.find(
                        { $and: [{ 'id': id }, { 'products.id': products.id }] });
                    let product = cart[0].products;
                    let productQuantity = 0;
                    product.forEach(e => {
                        if (e.id == products.id) { 
                            productQuantity = e.quantity + products.quantity;
                        }
                    });
                    console.log(productQuantity)
                    await this.model.updateOne(
                        { $and: [{ "id": id }, { "products.id": products.id  }] },
                        { "products.$.quantity": productQuantity });
                }
                return data;
            }
        }catch (err) {
            console.log(`🚩 Error in Add product in cart.\n
                        fuction -> addProduct.\n 
                        💣  Error: ${err}`);
        }
        console.log('🙊 uho! there is a problem: addProduct CartService');
    }
};

export default CartsService;