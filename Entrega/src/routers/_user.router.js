import { Router } from "express";
import userController from "../controllers/user.controller.js";


const router = Router();
//! app.use('/api/user', userRouter);
/* router.get('/', userController.getUsers); */

router.post('/create', userController.create);

export default router;