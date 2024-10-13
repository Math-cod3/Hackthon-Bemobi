
import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/', CustomerController.getAll);
router.get('/:id', CustomerController.getById);
router.put('/:id', CustomerController.update);
router.post('/:id/send-message', CustomerController.sendMessage);
router.get('/:id/communications', CustomerController.getCommunications);

export default router;
