import {Injectable} from "@angular/core";
import {GameState} from "./game-state";
import {Card} from "./card";

@Injectable({providedIn: 'root'})
export class Game {
  private readonly gameState: GameState;

  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  public getGameState(): GameState {
    return this.gameState;
  }

  public start(): Card[] {
    return this.determineNextCards();
  }

  public pickCard(cardId: number): Card[] {
    this.playCard(cardId);
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
}
