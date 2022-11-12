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
      name: "Weapon Collector",
      requirements: "Have 20 weapons",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.weapons,
      maxProgression: 20,
    },
    {
      milestoneId: 1,
      name: "Big Laser Collector",
      requirements: "Have 5 big lasers",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.bigLasers,
      maxProgression: 5,
    },
    {
      milestoneId: 2,
      name: "Fire all the lasers",
      requirements: "Fire lasers 10 times",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.weaponsFiredCounter,
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
