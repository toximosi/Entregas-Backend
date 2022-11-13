import { cartsService, usersService } from '../services/index.js'
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserService from '../services/user.service.js';


const showCart = async (req, res) => { 
    /* const user = [];
    if (tokenUser) { 
        user = req.tokenUser;
        console.log(user)
    } */

    const userid = '6367fd0848f879fe056c34ec';
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