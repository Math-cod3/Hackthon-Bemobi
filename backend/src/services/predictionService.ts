import { Customer } from '../models/Customer';
import GenAIService from './genaiService';

class PredictionService {
  static async predictDelinquency(customer: Customer): Promise<boolean> {
    // Dados relevantes para a previsão
    const input = {
      paymentHistory: customer.paymentHistory,
      interactionHistory: customer.interactionHistory,
      // Outros dados relevantes
    };

    // Chamar o GenAI para fazer a previsão
    const prediction = await GenAIService.predictInadimplencia(input);

    return prediction; // true ou false
  }
}

export default PredictionService;
