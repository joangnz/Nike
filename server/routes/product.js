import express from 'express';
import {
    getAll,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
} from '../controllers/productController.js';

export const productRoutes = express.Router();

// GET: Fetch all products
productRoutes.get('/', getAll);

// GET: Fetch a product by ID
productRoutes.get('/:id', getProductById);

// POST: Create a new product
productRoutes.post('/', createProduct);

// PUT: Update a product by ID
productRoutes.put('/:id', updateProductById);

// DELETE: Delete a product by ID
productRoutes.delete('/:id', deleteProductById);