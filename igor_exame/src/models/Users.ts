import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

// Método para hash da senha antes de salvar
UsuarioSchema.pre('save', async function(next: () => void) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

export const Usuario = model('Usuario', UsuarioSchema);
