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

export const createProduct = async (req, res) => {
    const { id, name, price, description, type, offer, image } = req.body;
    const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';
    try {
        const query = `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?);`;
        const [result] = await db.query(query, [id, name, price, description, type, offer || false, image || noImage]);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product created successfully' });
        } else {
            res.status(404).json({ message: 'Product not created' });
        }
    } catch (error) { 
        res.status(500).json({ message: 'Error creating product', error });
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, type, offer, image } = req.body;

    try {
        const query = 'UPDATE products SET name = ?, price = ?, description = ?, type = ?, offer = ?, image = ? WHERE id = ?';
        const [result] = await db.query(query, [name, price, description, type, offer, image, id]);
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