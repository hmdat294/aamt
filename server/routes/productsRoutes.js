const express = require('express');
const router = express.Router();

const db = require('../config/db');


router.get('/products', (req, res) => {

    const sql = `
        SELECT 
            
            products.*, category_product.name AS category_name,
            GROUP_CONCAT(product_images.url) AS product_images

        FROM products

        JOIN category_product
        ON products.category_product_id = category_product.id

        LEFT JOIN product_images
        ON product_images.product_id = products.id

        GROUP BY products.id
    `;

    db.query(sql, (err, result) => {

        if (err) return res.status(500).json(err);

        const formatted = result.map(item => ({
            ...item,
            product_images: item.product_images
                ? item.product_images.split(',')
                : []
        }));

        res.json(formatted);

    });

});


router.get('/products/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT 
            products.*,
            category_product.name AS category_name

        FROM products

        JOIN category_product
        ON products.category_product_id = category_product.id

        WHERE products.id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({
            message: 'Product not found'
        });
        res.json(result[0]);

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



        /*
        |--------------------------------------------------------------------------
        | INSERT PRODUCT
        |--------------------------------------------------------------------------
        */

        const sql = `
            INSERT INTO products (
                category_product_id,
                name,
                offer,
                description
            )
            VALUES (?, ?, ?, ?)
        `;



        db.query(
            sql,
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



                /*
                |--------------------------------------------------------------------------
                | INSERT IMAGES
                |--------------------------------------------------------------------------
                */

                if (req.files.length > 0) {

                    const imageValues = req.files.map(
                        (file) => [
                            productId,
                            file.filename
                        ]
                    );



                    const imageSql = `
                        INSERT INTO product_images (
                            product_id,
                            url
                        )
                        VALUES ?
                    `;



                    db.query(
                        imageSql,
                        [imageValues],
                        (err2) => {

                            if (err2) {
                                return res
                                    .status(500)
                                    .json(err2);
                            }

                            res.json({
                                message:
                                    'Create product success'
                            });

                        }
                    );

                } else {

                    res.json({
                        message:
                            'Create product success'
                    });

                }

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



        /*
        |--------------------------------------------------------------------------
        | UPDATE PRODUCT
        |--------------------------------------------------------------------------
        */

        const sql = `
            UPDATE products
            SET
                category_product_id = ?,
                name = ?,
                offer = ?,
                description = ?
            WHERE id = ?
        `;



        db.query(
            sql,
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



                /*
                |--------------------------------------------------------------------------
                | IF HAS NEW IMAGES
                |--------------------------------------------------------------------------
                */

                if (req.files.length > 0) {

                    /*
                    |--------------------------------------------------------------------------
                    | DELETE OLD IMAGES
                    |--------------------------------------------------------------------------
                    */

                    db.query(
                        'DELETE FROM product_images WHERE product_id = ?',
                        [id],
                        (err2) => {

                            if (err2) {
                                return res
                                    .status(500)
                                    .json(err2);
                            }



                            /*
                            |--------------------------------------------------------------------------
                            | INSERT NEW IMAGES
                            |--------------------------------------------------------------------------
                            */

                            const imageValues =
                                req.files.map(
                                    (file) => [
                                        id,
                                        file.filename
                                    ]
                                );



                            const imageSql = `
                                INSERT INTO product_images (
                                    product_id,
                                    url
                                )
                                VALUES ?
                            `;



                            db.query(
                                imageSql,
                                [imageValues],
                                (err3) => {

                                    if (err3) {
                                        return res
                                            .status(500)
                                            .json(err3);
                                    }

                                    res.json({
                                        message:
                                            'Update success'
                                    });

                                }
                            );

                        }
                    );

                } else {

                    res.json({
                        message:
                            'Update success'
                    });

                }

            }
        );

    }
);


router.delete('/products/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM products WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        res.json({
            message: 'Product deleted successfully'
        });

    });

});


const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, 'uploads/');

    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + '-' + file.originalname
        );

    }

});

const upload = multer({ storage });


module.exports = router;