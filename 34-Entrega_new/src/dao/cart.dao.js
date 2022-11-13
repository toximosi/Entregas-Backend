import cartsModel from "./models/cart.model.js";

export default class CartsDao { 

    getAll = () =>{
        return cartsModel.find();
    };

    getById = (id) => {
        return cartsModel.findOne({ _id: id }).lean();
    };
    getByIdAndPopulate = (id) => {
        return cartsModel.findOne({ _id: id }).lean().populate('products.product');
    }; 
    save = () => {
        return cartsModel.create({ artwoks: [] });
    };
    update = (id, cart) => {
        return cartsModel.findByIdAndUpdate(id, { $set: { products: cart.products } })
    };
};