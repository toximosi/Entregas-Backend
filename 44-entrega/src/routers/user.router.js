import { Router } from "express";
const router = Router();

import userController from '../controllers/user.controller.js';

import uploader from '../services/uploader.js';

/* app.use('/api/user', productRouter); */

router.post('/create' /* ,uploader.single('images/avatar') */ , userController.create);

router.get('/', userController.getAll);
router.get('/:id', userController.getBy);

/* router.delete();

router.uploader(); */


export default router;
