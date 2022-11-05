import {Milestone} from "./milestone";

export class GameState {
  public turnCounter = 1
  public money = 15
  public points = 0
  public moneyProduction = 1
  public pointProduction = 0
  public milestonesInGame: Milestone[] = [
    {
      milestoneId: 0,
      name: "Have X money production"
    },
    {
      milestoneId: 1,
      name: "Have X point production"
    },
    {
      milestoneId: 2,
      name: "Trigger production X times"
    }
  ]
  public achievedMilestones: Milestone[] = [{
    milestoneId: 2,
    name: "Trigger production X times"
  }
  ]
}
