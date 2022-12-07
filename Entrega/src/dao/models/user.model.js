import mongoose from 'mongoose';

export default class User {
    static get model() {
        return 'Users';
    }
    static get schema() {
        return {
            first_name: String,
            last_name: String,
            password: {
                type: String,
                default: '1234'
            },
            email: String,
            age: Number,
            role:{
                type: String,
                enum: ['user','admin'],
                default: 'user'
            },
            phone: String,
            address: String,
            image: {
                type: String,
                default: '/images/avatar/avatar.png'
            },
            cart:{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Carts'
            }
        }
    }
}
