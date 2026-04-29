const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    '/uploads',
    express.static('uploads')
);

const productsRoutes = require('./routes/productsRoutes');
const postsRoutes = require('./routes/postsRoutes');
const archsRoutes = require('./routes/archsRoutes');

app.use('/api', productsRoutes, postsRoutes, archsRoutes);

app.get('/', (req, res) => res.send('API running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});