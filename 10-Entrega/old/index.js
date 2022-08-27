import mongoose from "mongoose";
import usersService from "./models/users.js";

//Conexion
//01. conectar con la BD
//mongoose.connect('mongodb://localhost:27017');
mongoose.connect('mongodb://127.0.0.1:27017/school');
//enviroment para poder correr datos asincronos, ya que mongo es asincrono
const process = async () => {
    if (err) {
        console.log("x _ X");
    } else { 
        console.log("connected to database");
    }
    
    
    /*READ*/
    /* let users = await usersService.find();
    console.log(users); */
    mongoose.disconnect();
};
process();
