/* import mongoose, { Schema } from "mongoose";
import { userInfo } from "os";

const collection = "Data";

const schema = new mongoose.Schema({
    id: {
        type: Schema.ObjectId,
    },
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    age: Number,
    image: String,
    role: userInfo,
    phone: String,
    cart: {
        id: {
            type: Schema.ObjectId,
        },
        products{

        }
    }
})

const DataModel = mongoose.model(collection, schema);

export default DataModel; */