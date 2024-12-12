import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  
  if (!token) {
    return res.status(401).send('Token de autenticação não fornecido');
  }

  
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }

   
    req.user = decoded;
    next();
  });
}

