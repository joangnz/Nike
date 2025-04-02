import db from '../index.js';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await db.query(query, [username, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
        const [rows] = await db.query(query, [username, password]);
        if (rows.length > 0) {
            return res.status(200).json({ message: 'Login successful', role: 'user' });
        }
        res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};