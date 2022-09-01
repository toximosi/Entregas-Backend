import mongoose from 'mongoose';

const cartsCollection = 'products';

const CartsSchema = new mongoose.Schema({
        id: {type: String, require:true, max:100},
		timestamp: {type:Date, require:true, max:100},
		products: {type:Array, require:false},
});

export const carts = mongoose.model(cartsCollection, CartsSchema);