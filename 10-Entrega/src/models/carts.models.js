import mongoose from "mongoose";

const collection = "carts";

const cartsSchema = mongoose.schema({
        id: Number,
		timestamp: Date,
		products: Array,
});

const cartsService = mongoose.model(collection, cartsSchema);

export default cartsService;