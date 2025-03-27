import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';

export const adminRoutes = express.Router();

// Admin Login Route
adminRoutes.post('/login', loginAdmin);