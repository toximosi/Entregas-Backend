import mongoose from 'mongoose';

export default class User { 
    static get model() { 
        return 'User';
    }

    static get Schema() {
        return {
            first_name:String,
            last_name:String,
            password:String,
            email:String,
            role:{
                type:String,
                enum:['user','artist','admin'],
                default:'user'
            },
            avatar:String,
            address:String,
            cart:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Cart'
            }

        }
    }
}
