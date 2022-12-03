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
            role:{
                type: String,
                enum: ['user','artist','admin'],
                default: 'user'
            },
            image: {
                type: String,
                default: '/images/avatar/avatar.png'
            },
            address: String,
            cart:{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Carts'
            }
        }
    }
}
