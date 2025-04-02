import express from 'express';
import {
    getAll,
    getUserById,
    updateUserById,
    deleteUserById
} from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';
import { login } from '../controllers/userController.js';

export const adminRoutes = express.Router();

adminRoutes.post('/login', login);
adminRoutes.get('/', authenticateAdmin, getAll);
adminRoutes.get('/:id', authenticateAdmin, getUserById);
adminRoutes.put('/:id', authenticateAdmin, updateUserById);
adminRoutes.delete('/:id', authenticateAdmin, deleteUserById);