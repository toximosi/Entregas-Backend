import { Router } from "express";
import productsController from "../controllers/products.controller.js";


const router = Router();
//! app.use('/api/product', userRouter);

router.get('/', productsController.getAll);
router.get('/byId/:_id', productsController.getBy);

router.post('/save', productsController.save);

router.put('/updateById/:_id', productsController.updateBy);

router.delete('/delete/byId/:_id', productsController.deleteBy);

export default router;