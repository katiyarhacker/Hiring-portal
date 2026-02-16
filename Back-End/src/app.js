import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Test route
app.get("/", (req, res) => {
    res.send("Hiring Portal API is running");
});

export default app;
