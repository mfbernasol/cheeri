require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Cheeri API' }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
