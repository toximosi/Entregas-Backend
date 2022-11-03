import mongoose from "mongoose";

const collection = "carts";

const cartsSchema = mongoose.Schema({
        id: String,
		timestamp: Date,
		/* userid: String, */
		products: [
				{
				id: String,
				quantity: Number
				}			
			]
});

const cartsModel = mongoose.model(collection, cartsSchema);

export default cartsModel;