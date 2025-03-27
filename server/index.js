import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { adminRoutes } from './routes/admin.js';
import { userRoutes } from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/nike-store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});