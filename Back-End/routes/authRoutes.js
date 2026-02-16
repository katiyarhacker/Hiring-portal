import express from "express";

const router = express.Router();

// Temporary test route
router.get("/test", (req, res) => {
    res.json({ message: "Auth Route Working" });
});

export default router;
