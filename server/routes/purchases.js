import express from 'express';
import {
    getAll,
    createPurchase,
    updatePurchaseById,
    deletePurchaseById,
} from '../controllers/purchaseController.js';

export const purchaseRoutes = express.Router();

// GET: Fetch all purchases
purchaseRoutes.get('/', getAll);

// POST: Create a new purchase
purchaseRoutes.post('/', createPurchase);

// PUT: Update a purchase by ID
purchaseRoutes.put('/:id', updatePurchaseById);

// DELETE: Delete a purchase by ID
purchaseRoutes.delete('/:id', deletePurchaseById);