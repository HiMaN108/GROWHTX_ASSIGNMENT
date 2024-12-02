import express from "express";
import { uploadAssignment } from "../controllers/assignmentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/upload", authMiddleware("user"), uploadAssignment);

export default router;
