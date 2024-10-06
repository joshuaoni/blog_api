const express = require('express');
const { connectToDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

connectToDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(process.env.APP_PORT || 8080, () => {
  console.log(`app running on port ${process.env.APP_PORT}`);
})