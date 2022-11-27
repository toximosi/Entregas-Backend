import { Router } from "express";
const router = Router();

import dataController from '../controllers/data.controller.js'

/* app.use('/api/data', dataRouter); */
router.get('/', dataController.userAllInfo);

export default router;