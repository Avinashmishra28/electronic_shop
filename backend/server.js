import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRouter from './routes/cartRouter.js';
import addressRouter from './routes/addressRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);

app.get('/', (req, res) => {
    res.send('api is runnig...');
});


connectDB();


app.listen(5001, () => {
    console.log(`server is start on port 5001`);
    
});