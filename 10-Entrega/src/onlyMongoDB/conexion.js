import mongoose from "mongoose";

const Mongobd = 'MongoBD';
const conexion = mongoose.connect(`mongodb+srv://toximosi:Saludotoxico77@cluster0.560p4qt.mongodb.net/${Mongobd}?retryWrites=true&w=majority`, (err) => {
    if (err) {
        console.log(`Error in conexion Mongo Atlas: ${err}`);
    } else { 
        console.log('Mongobd conexion');
    }
});

export default conexion;
