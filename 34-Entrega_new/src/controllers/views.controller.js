import { ROUTES } from "../constants/routers.js";
import { cartsService, productsService } from "../services/index.js";
import cartController from "./cart.controller.js";

/* src/routers/views.routers.js */
const home = (req, res) => {
     const sesion = req.session;
    /*const user = sesion.user.cart; */
    if (!sesion.user) {
        res.redirect('/login');
    } else { 
        const routes = ROUTES[sesion.user.role];
        res.render('home', {
            user: req.user,
            routes: routes
        });
    }
};
const register = (req, res) => { 
    res.render('register');
}
const login = (req, res) => { 
    res.render('login');
}
const logout = (req, res) => { 
    if (!req.session.user) {
        return res.redirect('login');
    } else { 
        req.session.destroy();
        res.redirect('/login');
    }
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
    const sesion = req.session;
    console.log(sesion.user)
    if (!sesion.user) {
        return res.redirect('/login');
    } else { 
        const userid = sesion.user.cart;
        let Arr = await cartController.showCart(userid);
        Arr = JSON.stringify(Arr);
        res.render('carts', { Arr });
    }
}
const cartsList = async(req, res) => { 
    let Arr = await cartController.cartList();
    res.render('cartsList', { Arr });
}

const perfil = (req, res) => { 
    res.render('perfil');
}

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
