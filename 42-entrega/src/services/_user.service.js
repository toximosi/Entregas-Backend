import PersistenceFactory from "../dao/Factory.js";
export default class UserService {
    
    constructor(dao) {
        this.dao;
        this.init();
    };
    init = async () => { 
        const {users} = await PersistenceFactory.getPersistence();
        this.dao = users;
    }

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
};