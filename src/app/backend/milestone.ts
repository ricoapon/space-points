import {GameState} from "./game-state";

export type Milestone = {
  milestoneId: number,
  name: String,
  isAchieved: (gameState: GameState) => boolean
}
