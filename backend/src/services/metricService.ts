import { Metric } from '../models/Metric';

class MetricService {
  static async recordMetric(name: string, value: number): Promise<void> {
    const metric = Metric.create({ name, value, timestamp: new Date() });
    await metric.save();
  }

  static async getMetrics(name: string): Promise<Metric[]> {
    return await Metric.find({ where: { name }, order: { timestamp: 'DESC' } });
  }
}

export default MetricService;