import './server';
import express from 'express';
import bodyParser from 'body-parser';
import usuariosRoutes from './routes/usersRoutes';
import missoesRoutes from './routes/missionRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(usuariosRoutes);
app.use(missoesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
