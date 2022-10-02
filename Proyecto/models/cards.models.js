import mongoose from "mongoose";

const collection = "cards";

const cardsSchema = mongoose.Schema({
        id: Number,
		timestamp: Date,
		description: String,
		products: String 
});

const cardsModel = mongoose.model(collection, cardsSchema);

export default cardsModel;