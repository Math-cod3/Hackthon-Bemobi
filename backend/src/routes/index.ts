// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './authRoutes';
import customerRoutes from './customerRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/customers', customerRoutes);

// Outras rotas

export default router;
