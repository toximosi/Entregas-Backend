import { Router } from "express";
const router = Router();

import userController from '../controllers/user.controller.js';

import uploader from '../services/uploader.js';

/* app.use('/api/user', productRouter); */

router.post('/create' /* ,uploader.single('images/avatar') */ , userController.save);

router.get('/', userController.getAll);

router.get('/:_id', userController.getBy);
router.get('/byId/:_id', userController.getBy);
router.get('/byEmail/:email', userController.getBy);

router.delete('/:_id', userController.deleteBy);
router.delete('/byId/:_id', userController.deleteBy);
router.delete('/byEmail/:email', userController.deleteBy);

/* router.delete();

router.uploader(); */


export default router;
