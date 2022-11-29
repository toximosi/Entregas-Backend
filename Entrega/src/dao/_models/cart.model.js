import mongoose from 'mongoose';

export default class Cart{ 
    static get model() { 
        return 'Cart';
    }

    static get Schema() {
        return {
            products: [{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Product',
                quantity: {
                    type: Number,
                    default: 1
                    }
            }]
        }
    }
}