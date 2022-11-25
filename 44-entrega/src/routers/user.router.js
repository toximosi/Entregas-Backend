import { Router } from "express";
const router = Router();

import userController from '../controllers/user.controller.js';

import uploader from '../services/uploader.js';

/* app.use('/api/user', productRouter); */
router.get('/', userController.getAll);
router.get('/:id', userController.getBy);

export default router;
