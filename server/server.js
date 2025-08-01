import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
console.log('Loaded CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY?.slice(0, 8));
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY?.slice(0, 8));

app.use(clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
}))


app.get('/', (req, res) => {
    res.send('HydroGen Server is running');
});

app.use(requireAuth());

app.use('/api/ai', aiRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on', PORT);
});