import User from '../models/User.js';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            return res.status(200).json({ message: 'Login successful', role: 'user' });
        }
        res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};