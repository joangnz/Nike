import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';
import {
    getAll,
    getUserById,
    updateUserById,
    deleteUserById
} from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js';

export const adminRoutes = express.Router();

adminRoutes.post('/login', loginAdmin);
adminRoutes.get('/', authenticateAdmin, getAll);
adminRoutes.get('/:id', authenticateAdmin, getUserById);
adminRoutes.put('/:id', authenticateAdmin, updateUserById);
adminRoutes.delete('/:id', authenticateAdmin, deleteUserById);