import { ROUTES } from "../constants/routers.js";
import { cartService, productService, userService } from '../services/services.js';
import usersController from "./users.controller.js";
/* import cartController from "./cart.controller.js"; */

/* REF: app.use('/', viewsRouter);*/

let admin = false;
let user = false;
let login = true;

const nav = (session) => {
    if (session) {
        if (session.role == 'admin') {
            admin = true;
            login = false;
        } else {
            user = true;
            login = false;
        };
    };
};

const home = (req, res) => {
    console.log('--> viewControllers > home');
    res.render('home', {admin, user, login});
};


//Session ---------------------------------------------------------
const sessionRegister = (req, res) => {
    console.log('--> viewControllers > sessionRegister');
    res.render('session-register', {admin, user, login});
};

const sessionLogin = async (req, res) => {
    console.log('--> viewControllers > sessionLogin');
    if (req.session.user !== undefined) {
        res.redirect('products');
    } else { 
       nav(req.session?.user);
        res.render('session-login', { admin, user, login });
    }
};


const sessionLogout = (req, res) => {
    console.log('--> viewControllers > sessionLogout');
        admin = false;
        user = false;
        login = true;
    if (!req.session.user) {
        res.redirect('session-login');
    } else {
        
        res.render('session-logout', {admin, user, login});
    }
};


//user ---------------------------------------------------------
const userPerfil = (req, res) => {
    console.log('--> viewControllers > userPerfil');
    if (!req.session.user) {
        res.redirect('session-login');
    } else {
        nav(req.session?.user); 
        res.render('user-perfil', { admin, user, login, user: req.session.user });
    }
};

const userInfo = async (req, res)=>{ 
    console.log('--> viewControllers > userInfo');
    if (!req.session.user) {
        res.redirect('session-login');
    } else {
        const param = await req.params;
        const Arr = await userService.getBy(param);
        nav(req.session?.user);
        res.render('user-info', { admin, user, login, Arr });
    }
};

const userAll = async (req, res) => { 
    console.log('--> viewControllers > userAll ');
    if (!req.session.user) {
        res.redirect('session-login');
    } else {
        const Arr = await userService.getAll();
        nav(req.session?.user);
        res.render('user-all', { admin, user, login, Arr });
    }
};

const userCart = async (req, res) => {
    console.log('--> viewControllers > userCart');
    
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        const session = req.session;
        const userid = session.user.id;
        const cartid = session.user.cart;
        const Arr = await cartService.getCartPopulate({_id: cartid});
        const ArrProducts = Arr[0].products;
        nav(req.session?.user); 
        res.render('user-cart', {admin, user, login, userid, cartid, ArrProducts});
    };
};


//product ---------------------------------------------------------

const products = async (req, res) => {
    console.log('--> viewControllers > products');
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        let Arr = await productService.getAll();
        nav(req.session?.user);
        res.render('products', { admin, user, login, Arr });
    }
};

const productCreate = (req, res) => {
    console.log('--> viewControllers > productCreate'); 
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        nav(req.session?.user);
        res.render('product-create', { admin, user, login });
    }
};

const productAll = async (req, res) => {
    console.log('--> viewControllers > productAll'); 
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        let Arr = await productService.getAll();
        nav(req.session?.user);
        res.render('product-all', { admin, user, login, Arr });
    }
};

//cart ---------------------------------------------------------

const cartEnd = (req, res) => {
    console.log('--> viewControllers > cartEnd');
    if (!req.session.user) {
        return res.redirect('session-login');
    } else {
        nav(req.session?.user);
        res.render('endBuy', { admin, user, login });
    }
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
    

    cartEnd
}
