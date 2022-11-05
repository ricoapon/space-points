import {Milestone} from "./milestone";

export class GameState {
  public turnCounter = 1
  public money = 15
  public points = 0
  public moneyProduction = 1
  public pointProduction = 0
  public productionCounter = 0
  public milestonesInGame: Milestone[] = []
  public achievedMilestoneIds: number[] = []
}
