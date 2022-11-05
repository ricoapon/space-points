import {Milestone} from "./milestone";

export class GameState {
  public turnCounter = 1
  public money = 15
  public points = 0
  public moneyProduction = 1
  public pointProduction = 0
  public productionCounter = 0
  public milestonesInGame: Milestone[] = [
    {
      milestoneId: 0,
      name: "Have 20 money production",
      isAchieved: (gameState: GameState) => gameState.moneyProduction >= 20,
    },
    {
      milestoneId: 1,
      name: "Have 20 point production",
      isAchieved: (gameState: GameState) => gameState.pointProduction >= 20,
    },
    {
      milestoneId: 2,
      name: "Trigger production 10 times",
      isAchieved: (gameState: GameState) => gameState.productionCounter >= 10,
    }
  ]
  public achievedMilestoneIds: number[] = []
}
