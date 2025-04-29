import express from 'express';
import {
    getAll,
    createPurchase,
    updatePurchaseById,
    deletePurchaseById,
} from '../controllers/purchasesController.js';

export const purchasesRoutes = express.Router();

// GET: Fetch all purchases
purchasesRoutes.get('/', getAll);

// POST: Create a new purchase
purchasesRoutes.post('/', createPurchase);

// PUT: Update a purchase by ID
purchasesRoutes.put('/:id', updatePurchaseById);

// DELETE: Delete a purchase by ID
purchasesRoutes.delete('/:id', deletePurchaseById);