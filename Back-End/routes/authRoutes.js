import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

// Register route
router.post("/register", registerUser);
router.post("/login", loginUser);

// Test protected route
router.get("/profile", protect, (req, res) => {
    res.json({
        message: "Profile accessed",
        user: req.user,
    });
});


export default router;
