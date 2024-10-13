import { Request, Response } from 'express';
import { Customer } from '../models/Customer';
import { Communication } from '../models/Communication';
// Importe serviços e modelos necessários

class CustomerController {
  static async getAll(req: Request, res: Response) {
    try {
      const customers = await Customer.find();
      return res.json(customers);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const customer = await Customer.findOne(id);

      if (!customer) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }

      return res.json(customer);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar cliente' });
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    try {
      await Customer.update(id, data);
      const updatedCustomer = await Customer.findOne(id);
      return res.json(updatedCustomer);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar cliente' });
    }
  }

  static async sendMessage(req: Request, res: Response) {
    const { id } = req.params;
    const { message } = req.body;

    try {
      // Utilize o GenAI para gerar mensagens personalizadas
      // Envie a mensagem através do canal preferido
      // Registre a comunicação

      return res.json({ message: 'Mensagem enviada com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao enviar mensagem' });
    }
  }

  static async getCommunications(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const communications = await Communication.find({ where: { customerId: id } });
      return res.json(communications);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar comunicações' });
    }
  }
}

export default CustomerController;
