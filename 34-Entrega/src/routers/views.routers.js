import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';

const router = Router();


/* REF: app.use('/', viwesRouter); */
router.get('/',viewsController.home);
router.get('/register',viewsController.register);
router.get('/login',viewsController.login);


export default router;