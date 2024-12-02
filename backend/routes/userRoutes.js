import express from "express";
import { registerUser, loginUser, fetchAdmins } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/admins", authMiddleware("user"), fetchAdmins);

export default router;
