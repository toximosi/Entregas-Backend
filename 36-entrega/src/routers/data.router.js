import { Router } from "express";
const router = Router();

import { dataService } from "../services/index.js";

/* app.use('/api/data', dataRouter); */
router.get('/', dataService.dataAll);

export default router;