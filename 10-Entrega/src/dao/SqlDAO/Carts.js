import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection = 'carts';
const CartsSchema = new mongoose.Schema({
        id: String,
		timestamp: Date,
		products: Array,
});

export default class Carts extends MongoDBContainer { 
    constructor() { 
        super(collection, CartsSchema);
    }
}