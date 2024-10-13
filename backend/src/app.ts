// src/app.ts
import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorhandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(
    cors({
      origin: 'http://localhost:5173', // Porta padrão do Vite
    })
  );

app.use('/api', routes);

export default app;
