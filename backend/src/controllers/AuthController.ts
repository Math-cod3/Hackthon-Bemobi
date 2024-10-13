// src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

class AuthController {
  static async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ message: 'E-mail já registrado' });
      }

      const user = User.create({ name, email, password });
      await user.save();

      return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user.id }, config.jwtSecret, {
        expiresIn: '1d',
      });

      return res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

export default AuthController;
