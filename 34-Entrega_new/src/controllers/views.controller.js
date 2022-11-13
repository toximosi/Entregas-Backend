import { ROUTES } from "../constants/routers.js";
import { cartsService, productsService } from "../services/index.js";
import cartController from "./cart.controller.js";

/* src/routers/views.routers.js */
const home = (req, res) => {
    const routes = ROUTES[req.user.role]; 
    res.render('home', {
        user: req.user,
        routes: routes
    });
};

const register = (req, res) => { 
    res.render('register');
}
const login = (req, res) => { 
    res.render('login');
}

const productList = (req, res) => { 
    res.render('productList');
}

const productCreate = (req, res) => { 
    res.render('productCreate');
}

const productCard = async (req, res) => {
    let Arr = await productsService.getProduct();
    console.log(Arr);
    res.render('productCard', {Arr});
}

const carts = async(req, res) => { 
    let Arr = await cartController.showCart();
    Arr = JSON.stringify(Arr);
    console.log(Arr);
    res.render('carts', { Arr });
}
const cartsList = async(req, res) => { 
    let Arr = await cartController.cartList();
    
    console.log('Arr');
    console.log(Arr);
    res.render('cartsList', { Arr });
}

const perfil = (req, res) => { 
    res.render('perfil');
}



export default {
    home,
    register,
    login,
    productCreate,
    productList,
    productCard,
    carts,
    cartsList,
    perfil
}
