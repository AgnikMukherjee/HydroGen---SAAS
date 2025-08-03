import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';


const app = express();

await connectCloudinary();

app.use(cors());
app.use(express.json({
  origin: ['http://localhost:5173', 'http://localhost:5174', process.env.CLIENT_URL],
  credentials: true
}));

app.use(clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
}))


app.get('/', (req, res) => {
    res.send('HydroGen Server is running');
});
 
app.use(requireAuth());

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on', PORT);
});