import { Router } from 'express';
import MetricController from '../controllers/MetricController';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/:name', MetricController.getMetrics);

export default router;