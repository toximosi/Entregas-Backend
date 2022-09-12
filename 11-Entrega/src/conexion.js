import mongoose from "mongoose";

const Mongobd = 'MongoBD';

const conexion = mongoose.connect(`mongodb+srv://toximosi:Quier0Entrar@cluster0.npwrool.mongodb.net/${Mongobd}?retryWrites=true&w=majority`, (err) => {
    if (err) {
        console.log(`Error in conexion Mongo Atlas: ${err}`);
    } else { 
        console.log('Mongobd conexion');
    }
});

export default conexion;
