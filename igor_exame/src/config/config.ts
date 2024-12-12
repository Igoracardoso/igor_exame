import dotenv from 'dotenv';
dotenv.config();

export const config = {
  dbUrl: process.env.DB_URL || 'sqlite::memory:', 
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',
};
