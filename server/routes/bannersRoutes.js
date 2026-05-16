const express = require('express');
const router = express.Router();

const db = require('../config/db');
const upload = require('../middleware/upload');

router.get('/banners/:tag', (req, res) => {

    const tag = req.params.tag;
    const sql = `SELECT * FROM ${tag} ORDER BY id DESC`;

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});



router.get('/banners/:tag/:id', (req, res) => {

    const tag = req.params.tag;
    const id = req.params.id;
    const sql = `SELECT * FROM ${tag} WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
});



router.post('/banners', upload.array('banner', 10), (req, res) => {

    const tag = req.body.tag;

    if (!req.files || req.files.length === 0)
        return res.status(400).json({
            message: 'No images uploaded'
        });

    const values = req.files.map(file => [
        `http://localhost:5000/uploads/${file.filename}`
    ]);

    const sql = `INSERT INTO ${tag} (url) VALUES ?`;

    db.query(
        sql,
        [values],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({
                message: 'Banner uploaded successfully'
            });
        }
    );
});



router.put('/banners/:tag/:id', upload.single('banner'), (req, res) => {

    const tag = req.params.tag;
    const id = req.params.id;

    if (!req.file)
        return res.status(400).json({
            message: 'No image uploaded'
        });

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const sql = `UPDATE ${tag} SET url = ? WHERE id = ?`;

    db.query(sql, [imageUrl, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({
            message: 'Banner updated successfully'
        });
    });
});



router.delete('/banners/:tag/:id', (req, res) => {

    const tag = req.params.tag;
    const id = req.params.id;

    const sql = `DELETE FROM ${tag} WHERE id = ?`;

    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({
            message: 'Banner deleted successfully'
        });
    });
});



module.exports = router;