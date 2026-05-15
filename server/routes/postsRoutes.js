const express = require('express');

const router = express.Router();

const db = require('../config/db');
const upload = require('../middleware/upload');

router.get('/posts', (req, res) => {

    const sql = `
        SELECT 
            posts.*,
            category_post.name AS category_name

        FROM posts

        JOIN category_post
        ON posts.category_post_id = category_post.id

        ORDER BY posts.id DESC
    `;

    db.query(sql,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        }
    );
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

    db.query(sql, [id],
        (err, result) => {

            if (err) return res.status(500).json(err);
            if (result.length === 0)
                return res.status(404).json({
                    message: 'Post not found',
                });
            res.json(result[0]);

        }
    );
});



router.post('/posts', upload.single('thumbnail'), (req, res) => {

    const { title, content, category_post_id } = req.body;

    const thumbnail = req.file
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : null;
    console.log(req.file);

    const sql = `
        INSERT INTO posts
        (
            title,
            content,
            category_post_id,
            thumbnail
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            content,
            category_post_id,
            thumbnail
        ],
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json({
                message: 'Post created successfully',
                id: result.insertId,
                thumbnail
            });
        }
    );
});



router.put('/posts/:id', (req, res) => {

    const { id } = req.params;

    const { title, content, category_post_id } = req.body;

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
            id,
        ],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'Post updated successfully',
            });
        }
    );
});



router.delete('/posts/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM posts
        WHERE id = ?
    `;

    db.query(sql, [id],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'Post deleted successfully',
            });
        }
    );
});



module.exports = router;