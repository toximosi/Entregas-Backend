import mongoose from "mongoose";

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
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].find(params).lean();
    }

    findOne = (params, entity) => {
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].findOne(params).lean();
    }

    save = (document, entity) => {
        if (!this.models[entity]) throw new Error('La entidad no existe');
        return this.models[entity].create(document);
    }
}