import mongoose from "mongoose";
import { ObjectId } from "bson"

import User from "./models/user.model.js";
import Cart from "./models/cart.model.js";
import Product from "./models/product.model.js";

import config from "../config/config.js";


export default class Dao {
    constructor() {
        this.connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`)
        const timestamps = { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } };
        const userSchema = mongoose.Schema(User.schema, timestamps);
        const gallerySchema = mongoose.Schema(Cart.schema, timestamps);
        const productSchema = mongoose.Schema(Product.schema, timestamps);

        this.models = {
            [User.model]: mongoose.model(User.model, userSchema),
            [Cart.model]: mongoose.model(Cart.model, gallerySchema),
            [Product.model]: mongoose.model(Product.model, productSchema)
        }
    }

    getAll = ( entity) => {
        console.log('--> DAO getAll');
        if (!this.models[entity]) throw new Error({function: 'getAll' ,error: 'the entity don`t exist'});
        return this.models[entity].find().lean();
    }

    getBy = (params, entity) => {
        console.log('--> DAO getBy');
        if (!this.models[entity]) throw new Error({ function: 'getBy', error: 'the entity don`t exist' });
        const result = this.models[entity].findOne(params).lean();
        return result;
    }

    save = (document, entity) => {
        console.log('--> DAO save');
        if (!this.models[entity]) throw new Error({function: 'save' ,error: 'the entity don`t exist'});
        return this.models[entity].create(document);
    }

    updateBy = (param, data, entity) => {
        console.log('--> DAO update');
        if (!this.models[entity]) throw new Error({function: 'updateBy' ,error: 'the entityt don`t exist'});
        return this.models[entity].updateOne(param, data, {returnNewDocument:true});
    }

    deleteBy = (param, entity) => {
        console.log('--> DAO deleteBy');
        if (!this.models[entity]) throw new Error({function: 'deleteBy' ,error: 'the entityt don`t exist'});
        return this.models[entity].findByIdAndDelete(param);
    }
}