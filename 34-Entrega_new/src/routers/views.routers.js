import { Router } from 'express';
const router = Router();
import viewsController from '../controllers/views.controller.js';
import { /* executePolices, */ privateValidation, publicValidation } from '../middlewares/auth.js';
import uploader from '../services/uploader.js';


/* REF: app.use('/', viwesRouter); */
router.get('/', /* privateValidation,  */viewsController.home);
router.get('/register',uploader.single('image'),  /* publicValidation,  */viewsController.register);
router.get('/login', /* publicValidation,  */viewsController.login);
router.get('/logout',/*  publicValidation, */ viewsController.logout);
router.get('/productList', /* publicValidation, */ viewsController.productList);
router.get('/carts', /* publicValidation, */ viewsController.carts);
router.get('/perfil', /* publicValidation, */ viewsController.perfil);

router.get('/productCreate',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productCreate);
router.get('/productList',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productList);
router.get('/productCard',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productCard);
router.get('/cartsList',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.cartsList);
router.get('/endBuy',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.endBuy);


export default router;