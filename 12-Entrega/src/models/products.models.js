import mongoose from "mongoose";

const collection = "products";

const productsSchema = mongoose.Schema({
        id: Number,
		timestamp: Date,
		name: String,
		description: String,
		code: Number,
		image: String,
		price: Number,
		stock: Number 
});

const productsModel = mongoose.model(collection, productsSchema);

export default productsModel;