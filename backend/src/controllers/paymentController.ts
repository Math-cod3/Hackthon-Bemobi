import { Request, Response } from 'express';
import PaymentService from '../services/paymentService';

class PaymentController {
  static async processPayment(req: Request, res: Response) {
    const { method, paymentData } = req.body;

    try {
      let result;
      if (method === 'card') {
        result = await PaymentService.processCardPayment(paymentData);
      } else if (method === 'pix') {
        result = await PaymentService.processPixPayment(paymentData);
      } else {
        return res.status(400).json({ message: 'Método de pagamento não suportado' });
      }

      return res.json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao processar pagamento' });
    }
  }
}

export default PaymentController;