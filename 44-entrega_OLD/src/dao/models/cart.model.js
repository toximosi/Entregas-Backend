import mongoose from 'mongoose';

export default class Carts{ 
    static get model() { 
        return 'Carts';
    }

    static get Schema() {
        return {
            products: [{
                id: String
                /* {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: 'product'
                    } */,
                quantity: {
                    type: Number,
                    default: 1
                    }
            }]
            /*products: [{
            product: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'product'
            },
            quantity: {
                type: Number,
                default: 1
            }
            }]*/    
        }
    }
}