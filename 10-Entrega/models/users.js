import mongoose from "mongoose";

const collection = 'user';

//Schema, para obligar que el formato de la colección tenga los datos que necesitamos.
const userSchema = mongoose.Schema({
    first_name: String,
    las_name: {
        type: String,
        required:true,//Dato opbligatorio
    },
    role: {
        type: String,
        default: 'student', //Dato por defecto en el caso que no se pase la informacón
    },
    age: Number,
    active: Boolean,
    email: {
        type: String,
        require:true,
    }
});

const usersService = mongoose.model(collection, userSchema);

export default usersService;