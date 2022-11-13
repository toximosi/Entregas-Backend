import { ROUTES } from "../constants/routers.js";
import { cartsService, usersService } from '../services/index.js';



const showCart = async (userid) => { 
    //01@mail.es
    let Arr = await cartsService.getCartById(userid);
    return Arr
}

const cartList = async (req, res) => {
    let Arr = [];
    Arr = await cartsService.getCart();
    let Cart = await cartsService.getCart();
    let User = await usersService.getUsers();
    Cart.forEach(e => {
        User.forEach(user => {
            if (e._id == user._id) {

            }
        })
    });
 
    return Arr;
};

export default {
    showCart,
    cartList,
}