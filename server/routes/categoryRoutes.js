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
                    message: 'category_post not found',
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

    db.query(sql, [name],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'category created successfully',
                id: result.insertId,
            });
        }
    );
});



router.put('/category_post/:id', (req, res) => {

    const { id } = req.params;

    const { name } = req.body;

    const sql = `UPDATE category_post SET name = ? WHERE id = ?`;

    db.query(sql, [name, id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'category updated successfully',
            });
        }
    );
});



router.delete('/category_post/:id', (req, res) => {

    const { id } = req.params;

    const sql = `DELETE FROM category_post WHERE id = ?`;

    db.query(sql, [id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'category deleted successfully',
            });
        }
    );
});



module.exports = router;