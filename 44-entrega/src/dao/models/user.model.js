import mongoose from 'mongoose';

export default class User { 
    static get model() { 
        return 'Users';
    }

    static get Schema() {
        return {
            first_name: String,
            last_name: String,
            email: String,
            password: String,
            age: Number,
            image: tring,
            role: {
                type:String,
                enum:['user','admin'],
                default:'user'
            },
            phone: String,
            cart:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Carts'
            }
        }
    }
}
