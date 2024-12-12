import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export class Missao {
    id?: number;
    nome: string;
    planetaAlvo: string;
    duracaoEmAnos: number;
    quantidadeDeTripulantes: number;
    tecnologiasUtilizadas: string[];

    constructor(missaoData: any) {
        this.nome = missaoData.nome;
        this.planetaAlvo = missaoData.planetaAlvo;
        this.duracaoEmAnos = missaoData.duracaoEmAnos;
        this.quantidadeDeTripulantes = missaoData.quantidadeDeTripulantes;
        this.tecnologiasUtilizadas = missaoData.tecnologiasUtilizadas;
    }

    static async criar(missao: Missao) {
        const result = await pool.query(
            'INSERT INTO missoes (nome, planeta_alvo, duracao_em_anos, quantidade_de_tripulantes, tecnologias_utilizadas) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [missao.nome, missao.planetaAlvo, missao.duracaoEmAnos, missao.quantidadeDeTripulantes, JSON.stringify(missao.tecnologiasUtilizadas)]
        );
        return result.rows[0];
    }

    static async listar() {
        const result = await pool.query('SELECT * FROM missoes');
        return result.rows;
    }

    static async excluir(id: number) {
        await pool.query('DELETE FROM missoes WHERE id = $1', [id]);
    }
}
