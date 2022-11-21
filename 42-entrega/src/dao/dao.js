//DAO CONCENTRICO
import mongoose from 'mongoose';
import config from '../config/config.js';

import User from './models/user.model.js';
import Product from './models/product.model.js';
import Cart from './models/cart.model.js';

export default class Dao { 
    constructor() { 
        /* this.connection = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PWD}@cluster0.dkrjcaf.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`); */
        this.connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.dkrjcaf.mongodb.net/34Entrega?retryWrites=true&w=majority`);

        const timestamp = { timestamp: { createdAt: 'create_at', updateAt: 'update_at' } };

        const usersSchema = mongoose.Schema(User.schema, timestamp);
        const productSchema = mongoose.Schema(Product.schema, timestamp);
        const cartSchema = mongoose.Schema(Cart.schema, timestamp);

        this.models = {
            [User.model]: mongoose.model(User.model, usersSchema),
            [Product.model]: mongoose.model(Product.model, productSchema),
            [Cart.model]: mongoose.model(Cart.model, cartSchema)
        }
    }

    //Generall
    /* getAll = (params, entity) => {
        console.log('params');
        console.log(params);
        console.log('entity');
        console.log(entity);
        if (!this.models[entity]) throw new Error({function: 'getAll' ,error: 'the entityt don`t exist'});
        return this.models[entity].find(params).lean();
    }; */
    getAll = (entity) => {
        /* console.log('params');
        console.log(params);
        console.log('entity');
        console.log(entity); */
        if (!this.models[entity]) throw new Error({function: 'getAll' ,error: 'the entityt don`t exist'});
        return this.models[entity].find().lean();
    };
    
    getBy = (params, entity) => {
        if (!this.models[entity]) throw new Error({function: 'getBy' ,error: 'the entityt don`t exist'});
        return cartsModel.findOne(params).lean();
    };
    
    findOne = async (params, entity) => {
        if (!this.models[entity]) throw new Error({function: 'findOne' ,error: 'the entityt don`t exist'});
        return this.models[entity].findOne(params).lean();
    }
    
    getByAndPopulate = (params,populate, entity) => {
        if (!this.models[entity]) throw new Error({function: 'getByIdAndPopulate' ,error: 'the entityt don`t exist'});
        return cartsModel.findOne(params).lean().populate(populate);
    }; 
    
    save = (document, entity) => {
        if (!this.models[entity]) throw new Error({function: 'save' ,error: 'the entityt don`t exist'});
        return this.models[entity].create(document);
    };
    
    /* add = (params, data, entity) => {
        if (!this.models[entity]) throw new Error({function: 'add' ,error: 'the entityt don`t exist'});
        return this.model[entity].updateOne(params,data);;
    }; */
    
    update = (params, data, entity) => {
            if (!this.models[entity]) throw new Error({function: 'update' ,error: 'the entityt don`t exist'});
            return this.models[entity].updateOne(params, data);
    };
    /* update = (id, cart) => {
        return cartsModel.findByIdAndUpdate(id, { $set: { products: cart.products } })
    }; */
    
    //user
    /* getByEmail = (email, entity) =>{
        if (!this.models[entity]) throw new Error({function: 'getByEmail' ,error: 'the entityt don`t exist'});
        return usersModel.findOne({ email });
    }; */
    
    //product
    /* getByCode = (code, entity) =>{
        if (!this.models[entity]) throw new Error({function: 'getByCode' ,error: 'the entityt don`t exist'});
        return productsModel.findOne({code})
    }; */

/*     findProduct = (cart_Id, productId) => {
        return cartsModel.find({$and:[{ _id: cart_Id}, {'products.id': productId}]});
    }; */

    /* addProduct = (cart_Id, obj) => {
        return cartsModel.updateOne({ _id: cart_Id},{ $push: { 'products': obj }});
    }; */

    /* updateProduct = (cart_Id, productId, quantity) => {
        return cartsModel.updateOne(
            { $and: [{ _id: cart_Id }, { 'products.id': productId }] },
            { 'products.$.quantity': quantity });

    }; */
}