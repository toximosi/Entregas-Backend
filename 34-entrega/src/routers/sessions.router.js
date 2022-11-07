import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

/* app.use('/api/sessions', sesionsRouter); */
router.post('/register',sessionsController.register);
router.post('/login',sessionsController.login);


export default router;