import {GameState} from "./game-state";

export type Milestone = {
  milestoneId: number,
  requirements: String,
  pointsReward: number,
  isAchieved: (gameState: GameState) => boolean
}

export function allMilestones(): Milestone[] {
  return [
    {
      milestoneId: 0,
      requirements: "Have 20 money production",
      pointsReward: 10,
      isAchieved: (gameState: GameState) => gameState.moneyProduction >= 20,
    },
    {
      milestoneId: 1,
      requirements: "Have 20 point production",
      pointsReward: 10,
      isAchieved: (gameState: GameState) => gameState.pointProduction >= 20,
    },
    {
      milestoneId: 2,
      requirements: "Trigger production 10 times",
      pointsReward: 10,
      isAchieved: (gameState: GameState) => gameState.productionCounter >= 10,
    },
    {
      milestoneId: 3,
      requirements: "Have 20 money",
      pointsReward: 10,
      isAchieved: (gameState: GameState) => gameState.money >= 20,
    },
  ]
}
