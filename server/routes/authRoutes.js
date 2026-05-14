const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verifyAdmin = require('../middleware/admin');

require('dotenv').config();

router.post('/login', async (req, res) => {

    try {

        const { username, password } = req.body;

        if (
            username !== process.env.ADMIN_USERNAME
        ) {

            return res.status(401).json({
                message: 'Invalid username'
            });

        }

        const isMatch = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD
        );

        if (!isMatch) {

            return res.status(401).json({
                message: 'Wrong password'
            });

        }

        const token = jwt.sign(
            {
                role: 'admin'
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        );

        res.json({
            token
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server error'
        });

    }

});

module.exports = router;