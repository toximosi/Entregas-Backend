import { Router } from "express";
import usersController from "../controllers/users.controller.js";

import uploader from '../middlewares/uploader.js';//multer imagen

const router = Router();

//! app.use('/api/user', userRouter);

router.get('/', usersController.getAll);
router.get('/byId/:_id', usersController.getBy);
router.get('/byEmail/:email', usersController.getBy);

router.post('/save', uploader.single('image'), usersController.save);

router.put('/update/byId/:_id', uploader.single('image'), usersController.updateBy);
/* router.post('/update/byId/:_id', usersController.updateBy); */
router.put('/update/byEmail/:email', usersController.updateBy);

router.delete('/delete/byId/:_id', usersController.deleteBy);
router.delete('/delete/byEmail/:email', usersController.deleteBy);

router.get('/userInfo/', usersController.userInfo);
router.get('/userInfo/ById/:_id', usersController.userInfoBy);


export default router;