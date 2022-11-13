import { cartsService } from '../services/index.js'
import jwt from 'jsonwebtoken';
import config from '../config/config.js';


const showCart = async (req, res) => { 
        /* const token = jwt.verify(token, config.jwt.SECRET);
        console.log(token); */




}
const cartList = async (req, res) => {
    let Arr = await cartsService.getCart();
    return Arr;
};

export default {
    showCart,
    cartList,
}