import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection = 'products';
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

export default class Products extends MongoDBContainer { 
    constructor() { 
        super(collection, ProductsSchema);
    }
}