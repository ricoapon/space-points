import {GameState} from "./game-state";
import {IconType} from "../play-game/display-icon/display-icon.component";

export type Milestone = {
  milestoneId: number,
  name: String,
  requirements: String,
  pointsReward: number,
  progression: (gameState: GameState) => number,
  maxProgression: number,
  icon: IconType,
}

export function allMilestones(): Milestone[] {
  return [
    {
      milestoneId: 0,
      name: "Weapon Collector",
      requirements: "Have 30 small lasers",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.smallLasers,
      maxProgression: 30,
      icon: IconType.SMALL_LASERS,
    },
    {
      milestoneId: 1,
      name: "Big Laser Collector",
      requirements: "Have 5 big lasers",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.bigLasers,
      maxProgression: 5,
      icon: IconType.BIG_LASERS,
    },
    {
      milestoneId: 2,
      name: "Fire all the lasers",
      requirements: "Fire lasers 10 times",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.lasersFiredCounter,
      maxProgression: 10,
      icon: IconType.FIRE_LASERS,
    },
    {
      milestoneId: 3,
      name: "Fuck bitches, get money",
      requirements: "Have 60 money",
      pointsReward: 10,
      progression: (gameState: GameState) => gameState.money,
      maxProgression: 60,
      icon: IconType.MONEY,
    },
  ]
}
