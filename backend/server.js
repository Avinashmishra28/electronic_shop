import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('api is runnig...');
});

connectDB();

app.listen(5001, () => {
    console.log(`server is start on port 5001`);
    
});