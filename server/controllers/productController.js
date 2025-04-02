import db from '../index.js';

export const getAll = async (req, res) => {
    try {
        const query = 'SELECT * FROM products';
        const [rows] = await db.query(query);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({ message: 'No products found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'SELECT * FROM products WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        if (rows.length > 0) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, password } = req.body;

    try {
        const query = 'UPDATE products SET name = ?, password = ? WHERE id = ?';
        const [result] = await db.query(query, [name, password, id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'DELETE FROM products WHERE id = ?';
        const [result] = await db.query(query, [id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};