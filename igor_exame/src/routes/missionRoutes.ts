import { Router } from 'express';
import { MissionController } from '../controllers/missionController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/missions', authMiddleware, MissionController.createMission);
router.get('/missions', MissionController.getAllMissions);
router.delete('/missions/:id', authMiddleware, MissionController.deleteMission);

export default router;
