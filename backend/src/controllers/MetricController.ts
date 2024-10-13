import { Request, Response } from 'express';
import MetricService from '../services/metricService';

class MetricController {
  static async getMetrics(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const metrics = await MetricService.getMetrics(name);
      return res.json(metrics);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao obter métricas' });
    }
  }
}

export default MetricController;