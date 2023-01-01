import { ROUTES } from "../constants/routers.js";
import { cartService, productService, userService } from '../services/services.js';
import usersController from "./users.controller.js";
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
        res.render('user-perfil', { user: req.session.user });
    }
};

const userInfo = async (req, res)=>{ 
    console.log('--> viewControllers > userInfo');
    const param = await req.params;
    const Arr = await userService.getBy(param);
    res.render('user-info', {Arr});
};

const userAll = async (req, res) => { 
    const Arr = await userService.getAll();
    res.render('user-all', { Arr });
};

const userCart = async (req, res) => {
    console.log('--> viewControllers > carts');
    const sesion = req.session;
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        const userid = sesion.user.id;
        const cartid = sesion.user.cart;
        const Arr = await cartService.getCartPopulate({_id: cartid});
        const ArrProducts = Arr[0].products;
        res.render('user-cart', { userid, cartid, ArrProducts});
    };
};


//product ---------------------------------------------------------

const products = async (req, res) => {
    console.log('--> viewControllers > products');
    let Arr = await productService.getAll();
    res.render('products', { Arr });
};

const productCreate = (req, res) => {
    res.render('product-create');
};

const productAll = async (req, res) => {
    console.log('--> viewControllers > productAll');
    let Arr = await productService.getAll();
    res.render('product-all', { Arr });
};

//cart ---------------------------------------------------------
const carts = async (req, res) => {
  /*   
    console.log('--> viewControllers > carts');
    const sesion = req.session;
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        const userid = sesion.user.cart;
        let Arr = await cartService.getBy({_id: userid});
        // Arr = JSON.stringify(Arr); *   
        let id = Arr._id;
        let products = Arr.products;
        let product = "";
        console.log(JSON.stringify(Arr))
        // console.log(products) 
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

        res.render('user-cart', { Arr, id, productUser });
    }
    */
}; 

const cartEnd = (req, res) => { 
    res.render('endBuy');
}

export default {
    home,

    sessionRegister,
    sessionLogin,
    sessionLogout,

    userPerfil,
    userAll,
    userInfo,
    userCart,
    
    products,
    productCreate,
    productAll,
    
    carts,
    cartEnd
    /* cartsList, */
}
