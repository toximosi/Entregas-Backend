import { ROUTES } from "../constants/routers.js";
import { cartsService, usersService } from '../services/index.js';

const showCart = async (userid) => { 
    //01@mail.es
    let Arr = await cartsService.getCartById(userid);
    return Arr
}

const cartList = async (req, res) => {
    console.log('--> cartList');
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

const cartUpdate = async (req, res) => {
    console.log('--> cartUpdate');
    const body = await req.body;
    let idProduct = body.id;
    /* { id } */
    const sesion = req.session;
    let idCart = sesion.user.cart;
    console.log('idProduct -> ' + idProduct);
    console.log('idCart -> ' + idCart);
    /* { email, role, name, id, cart, image} */
    if (!sesion.user) {
        return res.redirect('/login');
    } else {
        let productNew = false;
        let productId = "";
        let data = await cartsService.getCartById(idCart);
        /* console.log('data');
        console.log(data); */
            if (data.length <= 0) {
                console.log(`dont't find cart with id: ${id}`);
               /*//!  Crear cart del usuario y añadir producto */
           } else {
                let existProduct = await cartsService.findProduct(idCart, idProduct);
                if (existProduct <= 0) {
                    let obj = {
                        id: idProduct,
                        quantity: 1
                    }
                    await cartsService.addProduct(idCart, obj);
                } else { 
                    let cart = data;
                    let product = cart.products;
                    let productQuantity = 0;
                    product.forEach(e => {
                        if (e.id == idProduct) { 
                            productQuantity = e.quantity + 1;
                        };
                    });
                    await cartsService.updateProduct(idCart, idProduct, productQuantity);
            }
                /*return data;  */
    }



       /*  const cartId = sesion.user.cart;
        cartsService.update(idProduct.id, cartId);
        console.log(`Add product ${idProduct.id} in cart ${cartId}`); */
    };
};

export default {
    showCart,
    cartList,
    cartUpdate
}