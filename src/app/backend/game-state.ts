import {Milestone} from "./milestone";

export const INITIAL_MAX_NR_OF_TURNS = 20

export class GameState {
  public turnCounter = 1
  public maxNrOfTurns = INITIAL_MAX_NR_OF_TURNS
  public money = 5
  public points = 0
  public science = 0
  public moneyProduction = 1
  public pointProduction = 0
  public productionCounter = 0
  public milestonesInGame: Milestone[] = []
  public achievedMilestoneIds: number[] = []
}
