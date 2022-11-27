import { Router } from "express";
import { rootCertificates } from "tls";
const router = Router();

import cartController from '../controllers/cart.controller.js';

/* app.use('/api/cart', productRouter); */
router.post('/cartList', cartController.cartList);
router.post('/update', cartController.update);

export default router;
