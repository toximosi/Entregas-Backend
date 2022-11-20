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
    /* update = (id, cart) => {
        return cartsModel.findByIdAndUpdate(id, { $set: { products: cart.products } })
    }; */

    findProduct = (cart_Id, productId) => {
        return cartsModel.find({$and:[{ _id: cart_Id}, {'products.id': productId}]});
    };

    addProduct = (cart_Id, obj) => {
        return cartsModel.updateOne({ _id: cart_Id},{ $push: { 'products': obj }});
    };

    updateProduct = (cart_Id, productId, quantity) => {
        return cartsModel.updateOne(
            { $and: [{ _id: cart_Id }, { 'products.id': productId }] },
            { 'products.$.quantity': quantity });

    };
};