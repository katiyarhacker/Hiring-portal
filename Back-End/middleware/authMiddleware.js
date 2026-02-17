import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let token;

    try {
        // 1. Check if token exists in headers
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // Format: Bearer TOKEN
            token = req.headers.authorization.split(" ")[1];
        }

        // 2. If no token
        if (!token) {
            return res.status(401).json({
                message: "Not authorized, no token",
            });
        }

        // 3. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Get user from DB (without password)
        req.user = await User.findById(decoded.id).select("-password");

        // 5. Continue
        next();

    } catch (error) {
        console.error(error);

        res.status(401).json({
            message: "Not authorized, token failed",
        });
    }
};
