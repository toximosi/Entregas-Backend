import mongoose from "mongoose";
import { ObjectId } from "bson"

import User from "./models/user.model.js";
import Cart from "./models/cart.model.js";
import Artwork from "./models/product.model.js";

import config from "../config/config.js";


export default class Dao {
    constructor() {
        this.connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`)
        const timestamps = { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } };
        const userSchema = mongoose.Schema(User.schema, timestamps);
        const gallerySchema = mongoose.Schema(Cart.schema, timestamps);
        const artworkSchema = mongoose.Schema(Artwork.schema, timestamps);

        this.models = {
            [User.model]: mongoose.model(User.model, userSchema),
            [Cart.model]: mongoose.model(Cart.model, gallerySchema),
            [Artwork.model]: mongoose.model(Artwork.model, artworkSchema)
        }
    }

    getAll = (params, entity) => {
        console.log('--> DAO getAll');
        if (!this.models[entity]) throw new Error({function: 'getAll' ,error: 'the entity don`t exist'});
        return this.models[entity].find(params).lean();
    }

    getByMongo_id = (id, entity) => {
        console.log('--> DAO getByMongo_id');
        if (!this.models[entity]) throw new Error({function: 'getByMongo_id' ,error: 'the entity don`t exist'});
        return this.models[entity].findOne({"_id": new mongo.ObjectID(id)}).lean();
    };

    getBy = (params, entity) => {
        if (!this.models[entity]) throw new Error({function: 'getBy' ,error: 'the entity don`t exist'});
        return this.models[entity].findOne(params);
    }

    save = (document, entity) => {
        console.log('--> DAO save');
        if (!this.models[entity]) throw new Error({function: 'save' ,error: 'the entity don`t exist'});
        return this.models[entity].create(document);
    }

    update = (params, data, entity) => {
        console.log('--> DAO update');
        if (!this.models[entity]) throw new Error({function: 'update' ,error: 'the entityt don`t exist'});
        return this.models[entity].updateOne(params, data);
    }

    /* deleteAll = (entity) => {
        console.log('--> DAO delete');
        if (!this.models[entity]) throw new Error({function: 'deleteAll' ,error: 'the entityt don`t exist'});
        //..        
        return this.models[entity].deleteMany();
    } */

    deleteBy = (param, entity) => {
        console.log('--> DAO deleteBy');
        if (!this.models[entity]) throw new Error({function: 'deleteBy' ,error: 'the entityt don`t exist'});
        return this.models[entity].findByIdAndDelete({param});
    }
}