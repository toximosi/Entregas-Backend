import mongoose from 'mongoose';

const productsCollection = 'products';

const ProductsSchema = new mongoose.Schema({
        id: Number,
		timestamp: Date,
		name: String,
		description: String,
		code: String,
		image: String,
		price: Number,
		stock: Number,
});

export const productsModel = mongoose.model(productsCollection, ProductsSchema);