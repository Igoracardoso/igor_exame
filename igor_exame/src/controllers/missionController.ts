import { Request, Response } from 'express';
import { MissionRepository } from '../repositories/missionRepository';
import { Mission } from '../models/Mission';

export class MissionController {
  static createMission(req: Request, res: Response): void {
    const { name, description, launchDate } = req.body;
    const newMission: Mission = {
      id: Date.now(),
      name,
      description,
      launchDate,
    };
    const mission = MissionRepository.createMission(newMission);
    res.status(201).json(mission);
  }

  static getAllMissions(req: Request, res: Response): void {
    const missions = MissionRepository.getAllMissions();
    res.status(200).json(missions);
  }

  static deleteMission(req: Request, res: Response): void {
    const { id } = req.params;
    const deleted = MissionRepository.deleteMission(Number(id));
    if (deleted) {
      res.status(200).send('Missão excluída com sucesso');
    } else {
      res.status(404).send('Missão não encontrada');
    }
  }
}
