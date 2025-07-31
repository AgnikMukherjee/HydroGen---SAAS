import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { clerkMiddleware, requireAuth } from '@clerk/express'


const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())


app.get('/', (req, res) => {
    res.send('HydroGen Server is running');
});

app.use(requireAuth())


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on' , PORT);
});