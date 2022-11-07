/* src/routers/views.routers.js */

const home = (req, res) => {
    res.render('home');
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
