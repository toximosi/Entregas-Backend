import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

import uploader from '../services/uploader.js';

/* app.use('/api/sessions', sesionsRouter); */
router.post('/register',uploader.single('images/avatar'), sessionsController.register);
router.post('/login', sessionsController.login);
router.post('/logout',sessionsController.logout);


export default router;