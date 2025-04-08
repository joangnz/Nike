import express from 'express';
import {
    getCartByUserId,
    addToCart,
    updateCartItem,
    removeFromCart,
} from '../controllers/cartController.js';

export const cartRoutes = express.Router();

// GET: Fetch cart items for a user
cartRoutes.get('/:userId', getCartByUserId);

// POST: Add an item to the cart
cartRoutes.post('/', addToCart);

// PUT: Update an item in the cart
cartRoutes.put('/:id', updateCartItem);

// DELETE: Remove an item from the cart
cartRoutes.delete('/:id', removeFromCart);