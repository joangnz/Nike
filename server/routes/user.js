import express from 'express';
import {
    register,
    login,
} from '../controllers/userController.js';

export const userRoutes = express.Router();

// Register Route
userRoutes.post('/register', register);

// Login Route
userRoutes.post('/login', login);