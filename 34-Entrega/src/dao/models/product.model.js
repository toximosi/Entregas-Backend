import mongoose from "mongoose";

const collection = "Products";

const schema = new mongoose.Schema({
    name:String,
    code:String,
    description: String,
    price: Number,
    quantity: Number,
    image: String
})

const productsModel = mongoose.model(collection, schema);

export default productsModel;