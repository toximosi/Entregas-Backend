import { cartsService, productsService, usersService } from '../services/services.js';
import config from "../config/config.js";


const userAllInfo = async (req, res) => {
    let data = [];

    const users = await usersService.getUsers();
    const carts = await cartsService.getCart();
    const products = await productsService.getProduct();
    data.push(users);

    data[0].forEach(d => { 
        /* console.log(d.cart) */
        /* console.log(d.cart) */
        carts.forEach(c => { 
            console.log('c')
            console.log((c._id).toString().replace(/ObjectId\("(.*)"\)/, "$1"))
            if (d.cart == c._id) { 
                console.log('igual')
            }
        })

    })
    /* console.log(carts); */
    res.send(data);
}






export default {
    userAllInfo,
}