import mongoose from 'mongoose';

const collection = 'user';

const userSchema = mongoose.Schema({
        id: String,
        timestamp: Date,
        nombre: String,
        apellido: String,
        email: String,
        edad: Number,
        password:String,
        alias: String,
        avatar: String
});

const userModel = mongoose.model(collection, userSchema);

export default userModel;