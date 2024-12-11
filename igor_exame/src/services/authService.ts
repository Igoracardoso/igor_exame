import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: config.jwtExpiration });
}
