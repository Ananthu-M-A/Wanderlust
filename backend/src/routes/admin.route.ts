import express from 'express';
import verifyToken from '../middlewares/auth.middleware';
import { adminAuthorization, adminLogin, adminLogout } from '../controllers/admin.controller';
import { validateLogin } from '../utils/FormValidator';

const adminRouter = express.Router();

adminRouter.post("/login", validateLogin, adminLogin);
adminRouter.get("/validate-token", verifyToken, adminAuthorization);
adminRouter.post("/logout", adminLogout);

export default adminRouter;