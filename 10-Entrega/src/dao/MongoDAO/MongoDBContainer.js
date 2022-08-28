import mongoose from "mongoose";

export default class MongoDBContainer { 
    constructor(collection, Schema) { 
        mongoose.connect('mongodb://127.0.0.1/BD');
        this.model = mongoose.model(collection, Schema);
    }

    getAll = async() => { 
        let results = await this.model.find();
        return results;
    }

    save = async (document) => { 
        
    }
};