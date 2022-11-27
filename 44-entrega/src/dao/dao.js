//DAO CONCENTRICO
import mongoose from 'mongoose';
import config from '../config/config.js';

import User from './models/user.model.js';
import Product from './models/product.model.js';
import Cart from './models/cart.model.js';

export default class Dao { 
    constructor() { 
        this.connection = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.a1f76bk.mongodb.net/MongoDb?retryWrites=true&w=majority`);
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

    getAll = (entity) => {
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
    
    getByAndPopulate = (params, populate, entity) => {
        if (!this.models[entity]) throw new Error({function: 'getByIdAndPopulate' ,error: 'the entityt don`t exist'});
        return cartsModel.findOne(params).lean().populate(populate);
    }; 
    
    create = (data, entity) => {
        console.log('--> DAO create');
        console.log('data');
        console.log(data);
        if (!this.models[entity]) throw new Error({function: 'create' ,error: 'the entityt don`t exist'});
        return this.models[entity].create(data);
    };
    
    update = (params, data, entity) => {
        console.log('--> DAO update');
        if (!this.models[entity]) throw new Error({function: 'update' ,error: 'the entityt don`t exist'});
        return this.models[entity].updateOne(params, data);
    };

    delete = () => {
        //..        
        return this.models[entity].deleteMany();
    };

    deleteBy = () => {
        //..        
        return this.models[entity].deleteOne();
    };

};