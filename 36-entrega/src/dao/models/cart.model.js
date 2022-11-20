import mongoose from "mongoose";

const collection = "Carts";

const schema = new mongoose.Schema({
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
});

/* const schema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'product'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
}); */

const cartsModel = mongoose.model(collection, schema);

export default cartsModel;