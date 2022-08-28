import mongoose from "mongoose";

const collection = "products";

const productsSchema = mongoose.schema({
        id: Number,
		timestamp: Date,
		name: String,
		description: String,
		code: Number,
		image: String,
		price: Number,
		stock: Number 
});

const productsService = mongoose.model(collection, productsSchema);

export default productsService;