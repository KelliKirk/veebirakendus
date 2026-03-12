require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const articleRoute = require('./routes/articleRoute.js');
const commentRoute = require('./routes/commentRoute.js');
const authorRoute = require('./routes/authorRoute.js');

mongoose.connect(process.env.MONGODB_URI)
const database = mongoose.connection;
database.on('error', (error) => { console.log(error) })
database.once('connected', () => { console.log('Database Connected'); })

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => { res.send('Express + JavaScript Server'); });
app.use('/api', articleRoute);
app.use('/api', commentRoute);
app.use('/api', authorRoute);
app.listen(3000, () => { console.log(`[server]: Server is running at http://localhost:3000`); });