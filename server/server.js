import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Connect Database
await connectDB();

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// All other routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Start server
app.listen(PORT, () => console.log('Server running on port ' + PORT));
