const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const productsRoutes = require('./routes/productsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const archsRoutes = require('./routes/archsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({
    extended: true,
    limit: '100mb',
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', productsRoutes, postsRoutes, archsRoutes, categoryRoutes);

app.get('/', (req, res) => {
    res.send('API running...');
});

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Internal server error',
        error: err.message,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});