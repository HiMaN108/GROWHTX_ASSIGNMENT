import User from "../models/user.js";
import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({}, "username");
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
