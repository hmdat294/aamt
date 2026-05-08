// server/routes/upload.routes.js

import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, 'uploads/');
    },

    filename(req, file, cb) {

        const uniqueName =
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9);

        cb(
            null,
            uniqueName + path.extname(file.originalname)
        );
    },
});

const fileFilter = (req, file, cb) => {

    const allowedMimeTypes = [

        'image/jpeg',
        'image/png',
        'image/webp',

        'video/mp4',
        'video/webm',
        'video/ogg',
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {

        cb(null, true);

    } else {

        cb(
            new Error('Only images and videos allowed'),
            false
        );
    }
};

const upload = multer({

    storage,

    limits: {
        fileSize: 1024 * 1024 * 100,
    },

    fileFilter,
});

router.post(
    '/',
    upload.single('file'),
    (req, res) => {

        if (!req.file) {

            return res.status(400).json({
                message: 'No file uploaded',
            });
        }

        const fileUrl =
            `${req.protocol}://${req.get('host')}` +
            `/uploads/${req.file.filename}`;

        return res.json({
            message: 'Upload success',
            url: fileUrl,
            type: req.file.mimetype,
        });
    }
);

export default router;