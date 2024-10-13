import Stripe from 'stripe';
import config from '../config';

const stripe = new Stripe(config.payment.stripeSecretKey, { apiVersion: '2020-08-27' });

class PaymentService {
  static async processCardPayment(paymentData: any): Promise<any> {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'brl',
      payment_method: paymentData.paymentMethodId,
      confirmation_method: 'automatic',
      confirm: true,
    });

    return paymentIntent;
  }

  static async processPixPayment(paymentData: any): Promise<any> {
    // Implementar integração com o PIX
    // Retornar os dados para o pagamento via PIX

    return {
      pixKey: config.payment.pixKey,
      amount: paymentData.amount,
      qrCode: 'codigo-qr-gerado',
      expiresAt: new Date(Date.now() + 3600 * 1000), // Expira em 1 hora
    };
  }
}

export default PaymentService;
