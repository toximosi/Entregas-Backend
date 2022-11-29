import mongoose from "mongoose";

import User from "./_models/user.model.js";
import Cart from "./_models/cart.model.js";
import Product from "./_models/product.model.js";

import config from "../config/config.js";


export default class Dao {
    constructor() {
        /* this.connection = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@codercluster.w5adegs.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`) */
        this.connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`)
        const timestamps = { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } };
        const userSchema = mongoose.Schema(User.schema, timestamps);
        const cartSchema = mongoose.Schema(Cart.schema, timestamps);
        const productSchema = mongoose.Schema(Product.schema, timestamps);

        this.models = {
            [User.model]: mongoose.model(User.model, userSchema),
            [Cart.model]: mongoose.model(Cart.model, cartSchema),
            [Product.model]: mongoose.model(Product.model, productSchema)
        }
    }

    getAll = (params, entity) => {
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].find(params).lean();
    }

    findOne = (params, entity) => {
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].findOne(params).lean();
    }

    save = (document, entity) => {
        console.log('entity')
        console.log(entity)
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].create({
                        first_name: "TEST",
                        
});
    }
}