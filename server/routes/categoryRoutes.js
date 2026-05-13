const express = require('express');
const router = express.Router();
const db = require('../config/db');



router.get('/category_post', (req, res) => {

    const sql = `SELECT * FROM category_post`;

    db.query(sql,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});



router.get('/category_post/:id', (req, res) => {

    const { id } = req.params;

    const sql = `SELECT * FROM category_post WHERE category_post.id = ?`;

    db.query(sql, [id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0)
                return res.status(404).json({
                    message: 'not found',
                });
            res.json(result[0]);
        }
    );
});



router.post('/category_post', (req, res) => {

    const { name } = req.body;
    if (!name)
        return res.status(400).json({
            message: 'Missing required fields',
        });
    const sql = `INSERT INTO category_post (name) VALUES (?)`;
    sendCrudRequest(res, sql, [name]);
});



router.put('/category_post/:id', (req, res) => {

    const { id } = req.params;
    const { name } = req.body;
    const sql = `UPDATE category_post SET name = ? WHERE id = ?`;
    sendCrudRequest(res, sql, [name, id]);
});



router.delete('/category_post/:id', (req, res) => {

    const { id } = req.params;
    const sql = `DELETE FROM category_post WHERE id = ?`;
    sendCrudRequest(res, sql, [id]);
});














router.get('/category_product', (req, res) => {

    const sql = `SELECT * FROM category_product`;

    db.query(sql,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
});



router.get('/category_product/:id', (req, res) => {

    const { id } = req.params;

    const sql = `SELECT * FROM category_product WHERE category_product.id = ?`;

    db.query(sql, [id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0)
                return res.status(404).json({
                    message: 'not found',
                });
            res.json(result[0]);
        }
    );
});



router.post('/category_product', (req, res) => {

    const { name } = req.body;
    if (!name)
        return res.status(400).json({
            message: 'Missing required fields',
        });
    const sql = `INSERT INTO category_product (name) VALUES (?)`;
    sendCrudRequest(res, sql, [name]);
});



router.put('/category_product/:id', (req, res) => {

    const { id } = req.params;
    const { name } = req.body;
    const sql = `UPDATE category_product SET name = ? WHERE id = ?`;
    sendCrudRequest(res, sql, [name, id]);
});



router.delete('/category_product/:id', (req, res) => {

    const { id } = req.params;
    const sql = `DELETE FROM category_product WHERE id = ?`;
    sendCrudRequest(res, sql, [id]);
});









const sendCrudRequest = (res, sql, data) => {
    db.query(sql, data,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'successfully',
            });
        }
    );
}



module.exports = router;