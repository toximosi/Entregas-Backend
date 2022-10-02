import { Router } from "express";
const router = Router();



//----------------------------------
router.get('index', async (req, res) => {
    let title = "proyecto Backend"
    res.render('index', {title, });
});

/* router.get('login', async (req, res) => {
    res.render('login', {});
}); */

/* router.get('register', async (req, res) => {
    res.render('register', {});
}); */

/* router.get('products', async (req, res) => {
    res.render('products', {});
}); */

/* router.get('users', async (req, res) => {
    res.render('users', {});
}); */

//============
//   ERROR
//============

/* router.get('404', async (req, res) => {
    res.render('404', {});
}); */

/* router.get('loginError', async (req, res) => {
    res.render('loginError', {});
}); */

/* router.get('registerError', async (req, res) => {
    res.render('registerError', {});
}); */

export default router;