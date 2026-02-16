import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Hiring Portal API is running");
});

// Server Starter Function
const startServer = async () => {
    try {
        // Connect Database First
        await connectDB();

        // Start Server Only After DB Connected
        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server failed to start:", error.message);
        process.exit(1); // Stop app if DB fails
    }
};

// Start Everything
void startServer();
