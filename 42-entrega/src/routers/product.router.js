import { Router } from "express";
const router = Router();

import producController from '../controllers/product.controller.js';

import uploader from '../services/uploader.js';

/* app.use('/api/product', productRouter); */
router.get('/', producController.getAll);
router.get('/:id', producController.getBy);
router.post('/create', uploader.single('image'), producController.create);

export default router;
