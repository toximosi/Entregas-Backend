import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';
import { /* executePolices, */ privateValidation, publicValidation } from '../middlewares/auth.js';

const router = Router();


/* REF: app.use('/', viwesRouter); */
router.get('/', privateValidation, viewsController.home);
router.get('/register', publicValidation, viewsController.register);
router.get('/login', publicValidation, viewsController.login);
router.get('/productList', publicValidation, viewsController.productList);
router.get('/productCreate',privateValidation, /* executePolices(['ADMIN']), */ viewsController.productCreate);


export default router;