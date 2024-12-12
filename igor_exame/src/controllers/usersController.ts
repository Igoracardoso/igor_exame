import { Request, Response } from 'express';
import { Usuario } from '../models/Users';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  
  const usuario = await Usuario.findOne({ email });
  
  if (!usuario || !(await usuario.comparePassword(senha))) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: usuario._id }, config.jwtSecret);
  
  res.status(200).json({ token });
};
