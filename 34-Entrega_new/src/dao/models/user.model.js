import { timeStamp } from 'console';
import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    age:Number,
    image:String,
    role: {
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    phone:String,
    cart:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Carts'
    },
    /* cart_history: [{
        id: String,
        date: Date,
        products: [{
            id: String,
            quantity: {
                type: Number,
                default: 1
            }
        }]
    }] */
})

const usersModel =  mongoose.model(collection,schema);

export default usersModel;