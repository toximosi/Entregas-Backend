
export default class UserService {
    
    constructor(dao) {
        this.dao = dao;
    };

    getUsers = () =>{
        return this.dao.getAll();
    };

    getUserById = (id) =>{
        return this.dao.getById(id);
    };

    getUserByEmail = (email) =>{
        return this.dao.getByEmail(email);
    };
    
    saveUser = (user) =>{
        return this.dao.save(user);
    };

    updateCartHistory = (user_Id, cart) => { 
        return this.dao.updateCartHistory(user_Id, cart);
    }
};