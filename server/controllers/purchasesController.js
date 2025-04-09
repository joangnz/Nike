import db from '../index.js';

export const getAll = async (req, res) => {
    try {
        const query = 'SELECT * FROM purchases';
        const [rows] = await db.query(query);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({ message: 'No purchases found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching purchases', error });
    }
};

export const getPurchaseByUserId = async (req, res) => {
    try {
        const query = 'SELECT * FROM purchases_products';
        const [rows] = await db.query(query);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(404).json({ message: 'No purchases found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching purchases', error });
    }
}

export const createPurchase = async (req, res) => {
    const { id, name, price, description, type, offer, image } = req.body;
    console.log(id, name, price, description, type, offer, image)
    const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';
    try {
        const query = `INSERT INTO purchases VALUES (?, ?, ?, ?, ?, ?, ?);`;
        const [result] = await db.query(query, [id, name, price, description, type, offer || false, image || noImage]);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Purchase created successfully' });
        } else {
            res.status(404).json({ message: 'Purchase not created' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error creating purchase', error });
    }
}

export const updatePurchaseById = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, type, offer, image } = req.body;

    try {
        const query = 'UPDATE purchases SET name = ?, price = ?, description = ?, type = ?, offer = ?, image = ? WHERE id = ?';
        const [result] = await db.query(query, [name, price, description, type, offer, image, id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Purchase updated successfully' });
        } else {
            res.status(404).json({ message: 'Purchase not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating purchase', error });
    }
};

export const deletePurchaseById = async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'DELETE FROM purchases WHERE id = ?';
        const [result] = await db.query(query, [id]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Purchase deleted successfully' });
        } else {
            res.status(404).json({ message: 'Purchase not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting purchase', error });
    }
};