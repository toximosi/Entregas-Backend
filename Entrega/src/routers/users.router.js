import { Router } from "express";
import usersController from "../controllers/users.controller.js";


const router = Router();
//! app.use('/api/user', userRouter);

router.get('/', usersController.getAll);
router.get('/byId/:_id', usersController.getBy);
router.get('/byEmail/:email', usersController.getBy);

router.post('/save', usersController.save);

router.put('/updateById/:_id', usersController.updateBy);
router.put('/updateByEmail/:email', usersController.updateBy);

router.delete('/delete/byId/:_id', usersController.deleteBy);
router.delete('/delete/byEmail/:email', usersController.deleteBy);

router.get('/userInfo/', usersController.userInfo);
router.get('/userInfo/ById/:_id', usersController.userInfoBy);


export default router;