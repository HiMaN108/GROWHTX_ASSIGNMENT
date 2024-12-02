import jwt from "jsonwebtoken";

const authMiddleware = (role) => {
    return (req, res, next) => {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Attach user info from the token
            if (role && req.user.role !== role) {
                return res.status(403).json({ error: "Forbidden" });
            }
            next();
        } catch (error) {
            res.status(401).json({ error: "Invalid token" });
        }
    };
};

export default authMiddleware;
