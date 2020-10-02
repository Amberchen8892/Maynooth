import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('working'));

// define routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/products', require('./routes/api/products'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);
