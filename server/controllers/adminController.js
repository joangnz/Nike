export const loginAdmin = (req, res) => {
    const { username, password } = req.body;

    // Dummy admin credentials
    if (username === 'admin' && password === 'admin123') {
        return res.status(200).json({ message: 'Login successful', role: 'admin' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
};