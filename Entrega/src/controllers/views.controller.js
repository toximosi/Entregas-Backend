import { ROUTES } from "../constants/routers.js";
import { cartService, productService, userService } from '../services/services.js';
/* import cartController from "./cart.controller.js"; */

/* REF: app.use('/', viewsRouter);*/

const home = (req, res) => {
    /* if (!req.session.user) {
        res.redirect('/login');
    } else { 
        const routes = ROUTES[req.session.user.role];
        res.render('home', {
            user: req.user,
            routes: routes
        });
    } */
    res.render('home');
};


//Session ---------------------------------------------------------
const sessionRegister = (req, res) => {
    res.render('session-register');
};

const sessionLogin = (req, res) => {
    res.render('session-login');
};

const sessionLogout = (req, res) => {
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        req.session.destroy();
        res.redirect('session-login');
    }
};


//user ---------------------------------------------------------
const userPerfil = (req, res) => {
    if (!req.session.user) {
        res.redirect('session-login');
    } else {
        console.log('hola')
        console.log(req.session.user);
        res.render('user-perfil', { user: req.session.user });
    }
};

const userAll = async (req, res) => { 
    const Arr = await userService.getAll();
    res.render('user-all', { Arr });
}


//product ---------------------------------------------------------

const products = async (req, res) => {
    console.log('--> viewControllers > products');
    let Arr = await productService.getAll();
    console.log('Arr');
    console.log(Arr);

    res.render('products', { Arr });
};

const productCreate = (req, res) => {
    res.render('product-create');
};

const productAll = (req, res) => {
    res.render('product-all');
};

//cart ---------------------------------------------------------
const carts = async (req, res) => {
    console.log('--> viewControllers > carts');
    const sesion = req.session;
    if (!req.session.user) {
        return res.redirect('/login');
    } else {
        const userid = sesion.user.cart;
        let Arr = await cartService.getBy({_id: userid});
        /* Arr = JSON.stringify(Arr); */    
        let id = Arr._id;
        let products = Arr.products;
        let product = "";
        console.log(JSON.stringify(Arr))
        /* console.log(products) */
        let productsAll = await productService.getAll(); 
        console.log('produsctAll');
        console.log(productsAll);
        const productUser = [];
        products.forEach((p) => {
            productsAll.forEach((pa) => { 
                if (p.id == pa._id) { 
                    productUser.push(pa);
                }
            })
        });

        res.render('carts-all', { Arr, id, productUser });
    }
};

/* const cartsList = async (req, res) => {
    let Arr = await cartController.cartList();
    res.render('cartsList', { Arr });
}; */


export default {
    home,

    sessionRegister,
    sessionLogin,
    sessionLogout,

    userPerfil,
    userAll,
    
    products,
    productCreate,
    productAll,
    
    carts,
    /* cartsList, */
}
