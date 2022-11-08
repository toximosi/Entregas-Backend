import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';
import { privateValidation, publicValidation } from '../middlewares/auth.js';

const router = Router();


/* REF: app.use('/', viwesRouter); */
router.get('/', privateValidation, viewsController.home);
router.get('/register', publicValidation, viewsController.register);
router.get('/login', publicValidation, viewsController.login);


export default router;