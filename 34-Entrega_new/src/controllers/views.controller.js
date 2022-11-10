import { ROUTES } from "../constants/routers.js";

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
const carts = (req, res) => { 
    res.render('carts');
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
    carts,
    perfil
}
