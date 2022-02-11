require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json({ msg: 'cheeri API is running' }));
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
