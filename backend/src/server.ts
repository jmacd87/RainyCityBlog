import express, { Request, Response } from 'express';
import connectDB from './utils/mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postsRouter from './routes/PostRoutes';

// Load environment variables
dotenv.config();

// Create an Express application instance
const app = express();

// Get the port from environment variables or default to 3000
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// Connect to the database
connectDB();

// Middleware setup
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow specific origin
  })
);
app.use(express.json());
app.use('/api/posts', postsRouter);

// Define a route for the root
app.get('/', (req: Request, res: Response): void => {
  res.send('Server running...');
});

// Start the server and listen on the specified port
app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});
