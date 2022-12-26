import { Router } from "express";
import productsController from "../controllers/products.controller.js";
import uploader from "../middlewares/uploader.js";

const router = Router();
//! app.use('/api/product', userRouter);

router.get('/', productsController.getAll);
router.get('/byId/:_id', productsController.getBy);

router.post('/save', uploader.single('image'), productsController.save);

router.put('/update/byId/:_id', productsController.updateBy);

router.delete('/delete/byId/:_id', productsController.deleteBy);

export default router;