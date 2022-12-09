import { Router } from "express";
import sessionsController from "../controllers/sessions.controller.js";
import uploader from "../middlewares/uploader.js";

const router = Router();

//REF: app.use('/api/session/',sessionsRouter);
router.post('/register', uploader.single('image'), sessionsController.register);
router.post('/login', sessionsController.login);

export default router;