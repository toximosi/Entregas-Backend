import { Router } from "express";
import usersController from "../controllers/users.controller.js";


const router = Router();
//! app.use('/api/user', userRouter);

router.get('/', usersController.getAll);
router.get('/:id', usersController.getBy);
router.get('/byId/:_id', usersController.getBy);
router.get('/byEmail/:email', usersController.getBy);

router.post('/create', usersController.create);

router.delete('/deleteById/:_id', usersController.deleteById);

export default router;