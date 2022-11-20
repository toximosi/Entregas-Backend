import { Router } from "express";
const router = Router();

import producController from '../controllers/product.controller.js';

import uploader from '../services/uploader.js';

/* app.use('/api/product', productRouter); */
router.post('/', uploader.single('image'), producController.createProduct);

export default router;
