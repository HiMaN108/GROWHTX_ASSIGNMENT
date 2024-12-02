import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getAssignmentsForAdmin, acceptAssignment, rejectAssignment } from "../controllers/assignmentController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/assignments", authMiddleware("admin"), getAssignmentsForAdmin);
router.post("/assignments/:id/accept", authMiddleware("admin"), acceptAssignment);
router.post("/assignments/:id/reject", authMiddleware("admin"), rejectAssignment);

export default router;
