const express = require('express');
const router = express.Router();

const db = require('../config/db');


router.get('/archs', (req, res) => {

    const sql = `
        SELECT 
            archs.*,
            category_arch.name AS category_name

        FROM archs

        JOIN category_arch
        ON archs.category_arch_id = category_arch.id
    `;

    db.query(sql, (err, result) => {

        if (err) return res.status(500).json(err);
        res.json(result);

    });

});


router.get('/archs/:id', (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT 
            archs.*,
            category_arch.name AS category_name

        FROM archs

        JOIN category_arch
        ON archs.category_arch_id = category_arch.id

        WHERE archs.id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({
                message: 'arch not found'
            });
        res.json(result[0]);

    });

});


router.post('/archs', (req, res) => {

    const {
        title,
        content,
        category_arch_id
    } = req.body;

    const sql = `
        INSERT INTO archs (
            title,
            content,
            category_arch_id
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            content,
            category_arch_id
        ],
        (err, result) => {

            if (err) return res.status(500).json(err)
            res.json({
                message: 'arch created successfully',
                id: result.insertId
            });

        }
    );

});


router.put('/archs/:id', (req, res) => {

    const { id } = req.params;

    const {
        title,
        content,
        category_arch_id
    } = req.body;

    const sql = `
        UPDATE archs
        SET
            title = ?,
            content = ?,
            category_arch_id = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            title,
            content,
            category_arch_id,
            id
        ],
        (err, result) => {

            if (err) return res.status(500).json(err);
            res.json({
                message: 'arch updated successfully'
            });

        }
    );

});


router.delete('/archs/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM archs WHERE id = ?';

    db.query(sql, [id], (err, result) => {

        if (err) return res.status(500).json(err);
        res.json({
            message: 'arch deleted successfully'
        });

    });

});



module.exports = router;