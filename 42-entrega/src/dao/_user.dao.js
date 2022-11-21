import usersModel from "./models/user.model.js";

export default class UsersDao {

    getAll = () =>{
        return usersModel.find();
    };

    getById = (id) =>{
        return usersModel.findOne({_id:id});
    };
    
    getByEmail = (email) =>{
        return usersModel.findOne({email})
    };

    save = (user) =>{
        return usersModel.create(user);
    };
    
};