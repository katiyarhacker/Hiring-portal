import User from "../models/User.js";

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Check if fields are empty
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all fields",
            });
        }

        // 2. Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        // 3. Create new user
        const user = await User.create({
            name,
            email,
            password,
        });

        // 4. Send response
        if (user) {
            res.status(201).json({
                message: "User registered successfully",
                userId: user._id,
                email: user.email,
            });
        } else {
            res.status(400).json({
                message: "Invalid user data",
            });
        }
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error",
        });
    }
};
