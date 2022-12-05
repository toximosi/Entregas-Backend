import { Router } from "express";
import cartsController from "../controllers/carts.controller.js";


const router = Router();
//! app.use('/api/cart', userRouter);

router.get('/', cartsController.getAll);
router.get('/byId/:_id', cartsController.getBy);

/* router.post('/save', cartsController.save);

router.put('/update/byId/:_id', cartsController.updateBy);

router.delete('/delete/byId/:_id', cartsController.deleteBy); */

export default router;