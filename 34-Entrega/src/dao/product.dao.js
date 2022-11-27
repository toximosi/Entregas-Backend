import productsModel from "./models/product.model.js";

export default class UsersDao {

    getAll = () =>{
        return productsModel.find();
    };

    getById = (id) =>{
        return productsModel.findOne({_id:id});
    };
    
    getByCode = (code) =>{
        return productsModel.findOne({code})
    };

    save = (product) => {
        console.log('product')
        console.log(product)
        return productsModel.create(product);
    };

    update = (id, product) => { 
        return productsModel.findByIdAndUpdate(id, {$set:product});
    }
};