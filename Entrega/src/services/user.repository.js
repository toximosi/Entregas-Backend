import GenericRepository from "./generic.repository.js";
import User from "../dao/models/user.model.js";

export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao, User.model);
    }
    /*  
    getUserByEmail = (email) => {
    return this.getBy({ email })
    } */
}