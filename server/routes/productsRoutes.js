const express = require('express');
const router = express.Router();

const db = require('../config/db');
const upload = require('../middleware/upload');

router.get('/products', (req, res) => {

    const sql = `
        SELECT 
            products.*,
            category_product.name AS category_name,

            product_images.id AS image_id,
            product_images.url AS image_url

        FROM products

        JOIN category_product
        ON products.category_product_id = category_product.id

        LEFT JOIN product_images
        ON product_images.product_id = products.id

        ORDER BY products.id DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        const productsMap = {};

        result.forEach(row => {

            if (!productsMap[row.id]) {

                productsMap[row.id] = {
                    id: row.id,
                    category_product_id:
                        row.category_product_id,
                    name: row.name,
                    offer: row.offer,
                    description: row.description,
                    category_name:
                        row.category_name,
                    product_images: []
                };
            }

            if (row.image_id) {

                productsMap[row.id]
                    .product_images
                    .push({
                        id: row.image_id,
                        url: row.image_url
                    });
            }
        });

        res.json(
            Object.values(productsMap)
        );
    });
});


router.get('/products/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT 
            products.*,
            category_product.name AS category_name,

            product_images.id AS image_id,
            product_images.url AS image_url

        FROM products

        JOIN category_product
        ON products.category_product_id = category_product.id

        LEFT JOIN product_images
        ON product_images.product_id = products.id

        WHERE products.id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {

            return res.status(404).json({
                message: 'Product not found'
            });
        }

        const product = {
            id: result[0].id,
            category_product_id:
                result[0].category_product_id,
            name: result[0].name,
            offer: result[0].offer,
            description: result[0].description,
            category_name:
                result[0].category_name,
            product_images: []
        };

        result.forEach(row => {

            if (row.image_id) {

                product.product_images.push({
                    id: row.image_id,
                    url: row.image_url
                });
            }
        });

        res.json(product);
    });
});


router.post(
    '/products',
    upload.array('images', 10),
    (req, res) => {

        const {
            category_product_id,
            name,
            offer,
            description
        } = req.body;

        const sqlProduct = `
            INSERT INTO products
            (
                category_product_id,
                name,
                offer,
                description
            )
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sqlProduct,
            [
                category_product_id,
                name,
                offer,
                description
            ],
            (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                const productId = result.insertId;

                if (!req.files || req.files.length === 0) {
                    return res.json({
                        message: 'Product created'
                    });
                }

                const imageValues = req.files.map(file => [
                    productId,
                    `http://localhost:5000/uploads/${file.filename}`
                ]);

                const sqlImages = `
                    INSERT INTO product_images
                    (product_id, url)
                    VALUES ?
                `;

                db.query(
                    sqlImages,
                    [imageValues],
                    (err2) => {

                        if (err2) {
                            return res.status(500).json(err2);
                        }

                        res.json({
                            message: 'Product created successfully'
                        });
                    }
                );
            }
        );
    }
);



router.put(
    '/products/:id',
    upload.array('images', 10),
    (req, res) => {

        const { id } = req.params;

        const {
            category_product_id,
            name,
            offer,
            description
        } = req.body;

        const sqlUpdate = `
            UPDATE products
            SET
                category_product_id = ?,
                name = ?,
                offer = ?,
                description = ?
            WHERE id = ?
        `;

        db.query(
            sqlUpdate,
            [
                category_product_id,
                name,
                offer,
                description,
                id
            ],
            (err) => {

                if (err) {
                    return res.status(500).json(err);
                }

                // nếu không có ảnh mới
                if (
                    !req.files ||
                    req.files.length === 0
                ) {

                    return res.json({
                        message: 'Updated successfully'
                    });
                }

                // thêm ảnh mới
                const imageValues = req.files.map(file => [
                    id,
                    `http://localhost:5000/uploads/${file.filename}`
                ]);

                const sqlInsertImages = `
                    INSERT INTO product_images
                    (product_id, url)
                    VALUES ?
                `;

                db.query(
                    sqlInsertImages,
                    [imageValues],
                    (err2) => {

                        if (err2) {
                            return res.status(500).json(err2);
                        }

                        res.json({
                            message: 'Updated successfully'
                        });
                    }
                );
            }
        );
    }
);


router.delete('/products/:id', (req, res) => {

    const { id } = req.params;

    const sqlDeleteImages = `
        DELETE FROM product_images
        WHERE product_id = ?
    `;

    db.query(
        sqlDeleteImages,
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            const sqlDeleteProduct = `
                DELETE FROM products
                WHERE id = ?
            `;

            db.query(
                sqlDeleteProduct,
                [id],
                (err2) => {

                    if (err2) {
                        return res.status(500).json(err2);
                    }

                    res.json({
                        message: 'Deleted successfully'
                    });
                }
            );
        }
    );
});


router.delete('/product-images/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM product_images
        WHERE id = ?
    `;

    db.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Image deleted'
        });
    });
});


module.exports = router;