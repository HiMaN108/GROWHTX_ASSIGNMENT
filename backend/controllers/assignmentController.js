import Assignment from "../models/assignment.js";
import Admin from "../models/admin.js";

export const uploadAssignment = async (req, res) => {
    try {
        const { task, admin } = req.body;
        const newAssignment = new Assignment({ userId: req.user.id, task, admin });
        await newAssignment.save();
        res.status(201).json({ message: "Assignment uploaded successfully" });
        console.log("Assignment:", newAssignment);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAssignmentsForAdmin = async (req, res) => {
    try {
        // console.log("Admin ID from middleware:", req.user.id); // just for checking the code
        const admin = await Admin.findById(req.user.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // admin's username
        const adminUsername = admin.username;

        // console.log("Admin Username:", adminUsername); // Debugging

        // Use the username to fetch assignments
        const assignments = await Assignment.find({ admin: adminUsername });

        if (assignments.length === 0) {
            return res.status(404).json({ message: "No assignments found for this admin" });
        }

        res.json({
            message: "Assignments fetched successfully",
            assignments,
        });
    } catch (error) {
        console.error("Error fetching assignments:", error);
        res.status(500).json({ error: error.message });
    }
};

export const acceptAssignment = async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: "Accepted" });
        res.json({ message: "Assignment accepted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const rejectAssignment = async (req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { status: "Rejected" });
        res.json({ message: "Assignment rejected" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
