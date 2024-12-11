import { Mission } from '../models/Mission';

let missions: Mission[] = [];

export class MissionRepository {
  static createMission(mission: Mission): Mission {
    missions.push(mission);
    return mission;
  }

  static getAllMissions(): Mission[] {
    return missions;
  }

  static deleteMission(id: number): boolean {
    const index = missions.findIndex(m => m.id === id);
    if (index > -1) {
      missions.splice(index, 1);
      return true;
    }
    return false;
  }

  static getMissionById(id: number): Mission | undefined {
    return missions.find(m => m.id === id);
  }
}
