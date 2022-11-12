import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';
import { /* executePolices, */ privateValidation, publicValidation } from '../middlewares/auth.js';

const router = Router();


/* REF: app.use('/', viwesRouter); */
router.get('/', privateValidation, viewsController.home);
router.get('/register', publicValidation, viewsController.register);
router.get('/login', publicValidation, viewsController.login);
router.get('/productList', publicValidation, viewsController.productList);
router.get('/carts', publicValidation, viewsController.carts);
router.get('/perfil', publicValidation, viewsController.perfil);

router.get('/productCreate',privateValidation, /* executePolices(['ADMIN']), */ viewsController.productCreate);
router.get('/productList',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productList);
router.get('/productCard',/* privateValidation, */ /* executePolices(['ADMIN']), */ viewsController.productCard);


export default router;