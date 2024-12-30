import { saveUserData } from "../controllers/user.controller.js";

import { Router } from "express";
const router = Router();

router
.route('/saveform')
.post(saveUserData);

export default router;