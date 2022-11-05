import {Injectable} from "@angular/core";
import {GameState} from "./game-state";
import {Card} from "./card";
import {allMilestones} from "./milestone";

@Injectable({providedIn: 'root'})
export class Game {
  private gameState: GameState;

  public getGameState(): GameState {
    return this.gameState;
  }

  public start(): Card[] {
    this.gameState = new GameState();
    this.gameState.milestonesInGame = allMilestones();
    return this.determineNextCards();
  }

  public pickCard(cardId: number): Card[] {
    this.playCard(cardId);
    this.checkAchievedMilestones();
    this.gameState.turnCounter += 1;
    return this.determineNextCards();
  }

  private determineNextCards(): Card[] {
    return [
      {
        cardId: -1,
        title: "Production",
        description: "Trigger production",
        cost: 0,
      },
      {
        cardId: 0,
        title: "Money",
        description: "Get 5 money",
        cost: 1,
      },
      {
        cardId: 1,
        title: "Money Production",
        description: "Get 5 money production",
        cost: 10,
      },
      {
        cardId: 2,
        title: "Points",
        description: "Get 5 points",
        cost: 20,
      }
    ]
  }

  private playCard(cardId: number) {
    if (cardId == -1) {
      this.gameState.money += this.gameState.moneyProduction
      this.gameState.points += this.gameState.pointProduction
      this.gameState.productionCounter += 1
    } else if (cardId == 0) {
      this.gameState.money -= 1;
      this.gameState.money += 5;
    } else if (cardId == 1) {
      this.gameState.money -= 10;
      this.gameState.moneyProduction += 5;
    } else if (cardId == 2) {
      this.gameState.money -= 20;
      this.gameState.points += 5;
    }
  }

  private checkAchievedMilestones() {
    for (let milestone of this.gameState.milestonesInGame) {
      if (this.gameState.achievedMilestoneIds.some(x => x == milestone.milestoneId)) {
        continue
      }

      if (milestone.isAchieved(this.gameState)) {
        this.gameState.achievedMilestoneIds.push(milestone.milestoneId)
        this.gameState.points += milestone.pointsReward
      }
    }
  }
}
