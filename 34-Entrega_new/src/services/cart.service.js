export default class CartsService {
    constructor(dao){
        this.dao = dao;
    }

    getCart = async () => { 
        let result = await this.dao.getAll();
        return result;
    }

    createCart = () =>{
        return this.dao.save();
    }

    getCartById = (cartId) =>{
        return this.dao.getById(cartId);
    }

    getPopulatedCart = (cartId) =>{
        return this.dao.getByIdAndPopulate(cartId);
    }

    /* update = (productId,cart_Id) =>{
        return this.dao.update(productId,cart_Id);
    } */

    findProduct = (cart_Id, obj) => {
        return this.dao.findProduct(cart_Id, obj);
    };

    addProduct = (cart_Id, productId) => {
        return this.dao.addProduct(cart_Id, productId);
    };

    updateProduct = (cart_Id, productId, quantity) => {
        return this.dao.updateProduct(cart_Id, productId, quantity);
    };
    
    deleteCart = (cart_id) => { 
        console.log('cart_id')
        console.log(cart_id)
        console.log('deleteCart')
        return this.dao.deleteCart(cart_id)
    }
}