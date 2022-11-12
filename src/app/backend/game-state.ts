import {Milestone} from "./milestone";

export const INITIAL_MAX_HEALTH = 20
export const INITIAL_NR_OF_CARDS_PER_DRAFT = 3;

export class GameState {
  public health = INITIAL_MAX_HEALTH
  // This is without the produce card.
  public nrOfCardsPerDraft = INITIAL_NR_OF_CARDS_PER_DRAFT
  public money = 20
  public points = 0
  public science = 0
  public moneyProduction = 5
  public pointProduction = 0
  public productionCounter = 0
  public milestonesInGame: Milestone[] = []
  public achievedMilestoneIds: number[] = []
  public deadlineCounter = 0
}
