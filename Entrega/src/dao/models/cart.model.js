import mongoose from 'mongoose';

export default class Gallery {

    static get model() {
        return 'Carts'
    }

    static get schema() {
        return {
            cart: [
                {
                    product:{
                        type:mongoose.SchemaTypes.ObjectId,
                        ref:'Products'
                    }
                }
            ]
        }
    }
}