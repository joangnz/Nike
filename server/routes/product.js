import express from 'express';
import {
    getAll,
    getProductById,
    updateProductById,
    deleteProductById,
} from '../controllers/productController.js';

export const productRoutes = express.Router();

// GET: Fetch all products
productRoutes.get('/', getAll);

// GET: Fetch a product by ID
productRoutes.get('/:id', getProductById);

// PUT: Update a product by ID
productRoutes.put('/:id', updateProductById);

// DELETE: Delete a product by ID
productRoutes.delete('/:id', deleteProductById);