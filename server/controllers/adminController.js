export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check the admins table
        const adminQuery = 'SELECT * FROM admins WHERE username = ? AND password = ?';
        const [adminRows] = await db.query(adminQuery, [username, password]);

        if (adminRows.length > 0) {
            return res.status(200).json({ message: 'Login successful', role: 'admin' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error', error });
    }
};

export const getAll = async (res) => {
    try {
        const query = 'SELECT * FROM users';
        const [rows] = await db.query(query);

        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'SELECT * FROM users WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        const query = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
        const [result] = await db.query(query, [username, password, id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'DELETE FROM users WHERE id = ?';
        const [result] = await db.query(query, [id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};