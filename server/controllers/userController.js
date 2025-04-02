import db from '../index.js';

export const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await db.query(query, [username, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check the admins table
        const adminQuery = 'SELECT * FROM admins WHERE username = ? AND password = ?';
        const [adminRows] = await db.query(adminQuery, [username, password]);

        if (adminRows.length > 0) {
            return res.status(200).json({ message: 'Login successful', role: 'admin' });
        }

        // Check the users table as a fallback
        const userQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
        const [userRows] = await db.query(userQuery, [username, password]);

        if (userRows.length > 0) {
            return res.status(200).json({ message: 'Login successful', role: 'user' });
        }

        // If no match is found in either table
        res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};