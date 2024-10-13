const stripe = require('stripe')(require('../config').payment.stripeSecretKey);
const pixIntegration = require('../integrations/payment/pixIntegration');

exports.processPayment = async (paymentData) => {
  if (paymentData.method === 'card') {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'brl',
      payment_method: paymentData.paymentMethodId,
      confirmation_method: 'automatic',
      confirm: true,
    });
    return paymentIntent;
  } else if (paymentData.method === 'pix') {
    const pixPayment = await pixIntegration.createPixPayment(paymentData);
    return pixPayment;
  } else {
    throw new Error('Método de pagamento não suportado');
  }
};
