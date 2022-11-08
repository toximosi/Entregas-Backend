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

export default {
    home,
    register,
    login
}
