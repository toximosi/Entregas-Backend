import GenericRepository from "./Generic.repository.js";
import Cart from "../dao/models/cart.model.js";

export default class CartRepository extends GenericRepository { 
    constructor(dao) {
        super(dao, Cart.model)
    }
};