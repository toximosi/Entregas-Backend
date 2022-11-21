import mongoose from "mongoose";

export default class Product { 
    static get model() { 
        return 'Products';
    }

    static get Schema() {
        return {
            product_name:String,
            code:String,
            description: String,
            price: Number,
            quantity: Number,
            image: String
        }
    }
}