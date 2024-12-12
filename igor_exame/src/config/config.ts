import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false 
    }
});

// Função para testar a conexão
const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Conexão bem-sucedida:', res.rows[0]);
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    } finally {
        await pool.end();
    }
};

testConnection();

