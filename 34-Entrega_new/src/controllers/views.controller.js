import { ROUTES } from "../constants/routers.js";
import { cartsService, productsService, usersService } from "../services/index.js";
import cartController from "./cart.controller.js";

/* src/routers/views.routers.js */
const home = (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else { 
        const routes = ROUTES[req.session.user.role];
        res.render('home', {
            user: req.user,
            routes: routes
        });
    }
};

const register = (req, res) => {
    res.render('register');
};

const login = (req, res) => {
    res.render('login');
};

const logout = (req, res) => {
    if (!req.session.user) {
        return res.redirect('login');
    } else {
        req.session.destroy();
        res.redirect('/login');
    }
};

const productList = (req, res) => {
    res.render('productList');
};

const productCreate = (req, res) => {
    res.render('productCreate');
};

const productCard = async (req, res) => {
    console.log('--> viewControllers > productCard');
    let Arr = await productsService.getProduct();
    res.render('productCard', { Arr });
};

const carts = async (req, res) => {
    console.log('--> viewControllers > carts');
    const sesion = req.session;
    if (!sesion.user) {
        return res.redirect('/login');
    } else {
        const userid = sesion.user.cart;
        let Arr = await cartController.showCart(userid);
        /* Arr = JSON.stringify(Arr); */    
        let id = Arr._id;
        let products = Arr.products;
        console.log(Arr)
        console.log(products)
        res.render('carts', { Arr, id, products });
    }
};

const cartsList = async (req, res) => {
    let Arr = await cartController.cartList();
    res.render('cartsList', { Arr });
};

const perfil = (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        console.log('hola')
        console.log(req.session.user);
        res.render('perfil', { user: req.session.user });
    }
};

export default {
    home,
    register,
    login,
    logout,
    productCreate,
    productList,
    productCard,
    carts,
    cartsList,
    perfil
}
