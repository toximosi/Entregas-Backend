import { Router } from "express";
const router = Router();

import cartController from '../controllers/cart.controller.js';

/* app.use('/api/cart', productRouter); */
router.post('/cartList', cartController.cartList);

export default router;
