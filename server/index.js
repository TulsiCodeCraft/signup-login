import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
import { UserRouter } from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.use('/auth', UserRouter);

mongoose.connect('mongodb://127.0.0.1:27017/authentication', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
