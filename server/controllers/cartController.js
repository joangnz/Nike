import db from '../index.js';

export const getCartByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const query = `
            SELECT c.id, c.quantity, p.name, p.price, p.image
            FROM cart c
            JOIN products p ON c.product_id = p.id
            WHERE c.user_id = ?`;
        const [rows] = await db.query(query, [userId]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
};

export const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const query = `
            INSERT INTO cart (user_id, product_id, quantity)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE quantity = quantity + ?`;
        await db.query(query, [userId, productId, quantity, quantity]);
        res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};

export const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const query = 'UPDATE cart SET quantity = ? WHERE id = ?';
        await db.query(query, [quantity, id]);
        res.status(200).json({ message: 'Cart item updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating cart item', error });
    }
};

export const removeFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const query = 'DELETE FROM cart WHERE id = ?';
        await db.query(query, [id]);
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing from cart', error });
    }
};