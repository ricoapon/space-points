import {GameState} from "./game-state";

export type Milestone = {
  milestoneId: number,
  name: String,
  requirements: String,
  pointsReward: number,
  progression: (gameState: GameState) => number,
  maxProgression: number,
}

export function allMilestones(): Milestone[] {
  return [
    {
      milestoneId: 0,
      name: "Money farmer",
      requirements: "Have 20 money production",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.moneyProduction,
      maxProgression: 20,
    },
    {
      milestoneId: 1,
      name: "Point farmer",
      requirements: "Have 5 point production",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.pointProduction,
      maxProgression: 5,

    },
    {
      milestoneId: 2,
      name: "Production farmer",
      requirements: "Trigger production 10 times",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.productionCounter,
      maxProgression: 10,

    },
    {
      milestoneId: 3,
      name: "Fuck bitches, get money",
      requirements: "Have 60 money",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.money,
      maxProgression: 60,
    },
    {
      milestoneId: 4,
      name: "PHD",
      requirements: "Have 5 science",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.science,
      maxProgression: 5,
    },
  ]
}
