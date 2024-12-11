import express from 'express';
import missionRoutes from './routes/missionRoutes';
import { config } from '../src/config/config';

const app = express();
app.use(express.json());
app.use('/api', missionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
