import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import { adminRoutes } from './routes/admin.js';
import { userRoutes } from './routes/user.js';
import { productRoutes } from './routes/product.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nike-store',
});

db.connect()
  .then(() => console.log('Connected to MySQL'))
  .catch((err) => console.error('Error connecting to MySQL:', err));

// Export the database connection for reuse
export default db;

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

// GET: Fetch all users
app.get('/api/teams', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});

// POST: Create a new user
app.post('/api/teams', async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const [result] = await db.query(query, [username, password]);
    res.status(201).json({ id: result.insertId, username, password });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

// PUT: Update an existing user
app.put('/api/teams/:id', async (req, res) => {
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
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
});

// DELETE: Delete a user
app.delete('/api/teams/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM users WHERE id = ?';
    const [result] = await db.query(query, [id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});