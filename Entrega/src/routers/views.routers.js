import { Router } from 'express';
const router = Router();

import viewsController from '../controllers/views.controller.js';

import uploader from '../middlewares/uploader.js';
import { /* executePolices, */ privateValidation, publicValidation } from '../middlewares/auth.js';


/* REF: app.use('/', viwesRouter); */

//home
router.get('/', /* privateValidation,  */viewsController.home);

//sesion
router.get('/session-register', /* uploader.single('image'), */  /* publicValidation,  */viewsController.sessionRegister );
router.get('/session-login', /* publicValidation,  */viewsController.sessionLogin);
router.get('/session-logout',/*  publicValidation, */ viewsController.sessionLogout);

//user
router.get('/user-perfil', /* publicValidation, */ viewsController.userPerfil);
router.get('/user-all',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.userAll);
router.get('/user-info/:_id',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.userInfo);
router.get('/user-cart',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.userCart);

//product
router.get('/products', /* publicValidation, */ viewsController.products);
router.get('/product-create',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productCreate);
router.get('/product-all', /* publicValidation, */ viewsController.productAll);


//cart
router.get('/carts-all'/* ,privateValidation, executePolices(['ADMIN']) */, viewsController.carts);


export default router;