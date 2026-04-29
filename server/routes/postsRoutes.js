const express = require('express');
const router = express.Router();

const db = require('../config/db');


router.get('/posts', (req, res) => {

    const sql = `
        SELECT 
            posts.*,
            category_post.name AS category_name

        FROM posts

        JOIN category_post
        ON posts.category_post_id = category_post.id
    `;

    db.query(sql, (err, result) => {

        if (err) return res.status(500).json(err);
        res.json(result);

    });

});


router.get('/posts/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT 
            posts.*,
            category_post.name AS category_name

        FROM posts

        JOIN category_post
        ON posts.category_post_id = category_post.id

        WHERE posts.id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({
                message: 'post not found'
            });
        res.json(result[0]);

    });

});


router.post('/posts', (req, res) => {

    const {
        title,
        content,
        category_post_id
    } = req.body;

    const sql = `
        INSERT INTO posts (
            title,
            content,
            category_post_id
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            content,
            category_post_id
        ],
        (err, result) => {

            if (err) return res.status(500).json(err)
            res.json({
                message: 'post created successfully',
                id: result.insertId
            });

        }
    );

});


router.put('/posts/:id', (req, res) => {

    const { id } = req.params;

    const {
        title,
        content,
        category_post_id
    } = req.body;

    const sql = `
        UPDATE posts
        SET
            title = ?,
            content = ?,
            category_post_id = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            title,
            content,
            category_post_id,
            id
        ],
        (err, result) => {

            if (err) return res.status(500).json(err);
            res.json({
                message: 'post updated successfully'
            });

        }
    );

});


router.delete('/posts/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM posts WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        res.json({
            message: 'post deleted successfully'
        });

    });

});



module.exports = router;