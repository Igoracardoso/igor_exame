import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export class Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;

    constructor(usuarioData: any) {
        this.nome = usuarioData.nome;
        this.email = usuarioData.email;
        this.senha = usuarioData.senha; // A senha deve ser hashada antes de salvar no banco.
    }

    static async criar(usuario: Usuario) {
        const hashedPassword = await bcrypt.hash(usuario.senha, 10);
        const result = await pool.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [usuario.nome, usuario.email, hashedPassword]
        );
        return result.rows[0];
    }

    static async encontrarPorEmail(email: string) {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        return result.rows[0];
    }
}
