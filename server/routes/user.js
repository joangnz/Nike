import express from 'express';
import {
    registerUser,
    loginUser,
} from '../controllers/userController.js';

export const userRoutes = express.Router();

// User Register Route
userRoutes.post('/register', registerUser);

// User Login Route
userRoutes.post('/login', loginUser);