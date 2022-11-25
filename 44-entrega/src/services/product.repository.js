import GenericRepository from "./Generic.repository.js";
import Product from "../dao/models/product.model.js";

export default class ProductRepository extends GenericRepository { 
    constructor(dao) {
        super(dao, Product.model)
    }
};