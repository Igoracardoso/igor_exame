import express from 'express';
import { registerUser, loginUser } from '../controllers/usersController';

const router = express.Router();

router.post('/usuarios/registro', registerUser);
router.post('/usuarios/login', loginUser); 

export default router;
