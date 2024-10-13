// src/middlewares/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authorization.replace('Bearer ', '').trim();

  try {
    const data = jwt.verify(token, config.jwtSecret);
    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
}
