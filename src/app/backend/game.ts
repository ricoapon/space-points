import {Injectable} from "@angular/core";
import {GameState} from "./game-state";
import {allCards, allCardsWithoutProduceFilteredByHealth, Card, cardFireLasers} from "./card";
import {Randomizer} from "./randomizer";

export enum GameEventType {
  NEWLY_SELECTED_CARDS,
  FINISHED_GAME,
}

export type GameEvent = {
  gameEventType: GameEventType,
  cards?: Card[],
  finalPoints?: number,
}

@Injectable({providedIn: 'root'})
export class Game {
  private gameState: GameState;
  private randomizer: Randomizer;

  public getGameState(): GameState {
    return this.gameState;
  }

  public start(): Card[] {
    this.gameState = new GameState();
    this.randomizer = new Randomizer();
    return this.determineNextCards();
  }

  public pickCard(cardId: number): GameEvent {
    this.playCard(cardId);
    this.gameState.health -= 1;

    if (this.gameState.health < 1) {
      return {
        gameEventType: GameEventType.FINISHED_GAME,
        finalPoints: this.gameState.points,
      }
    }

    return {
      gameEventType: GameEventType.NEWLY_SELECTED_CARDS,
      cards: this.determineNextCards(),
    };
  }

  private determineNextCards(): Card[] {
    const result = [cardFireLasers(),
      ...(this.randomizer.getRandomElementsFromArray(allCardsWithoutProduceFilteredByHealth(this.gameState.health), this.gameState.nrOfCardsPerDraft))];

    // Ensure cards on the screen are in a consistent order. Not sure if this is needed, but seems nice.
    result.sort((c1, c2) => c1.cardId - c2.cardId)
    return result;
  }

  private playCard(cardId: number) {
    const card = allCards().find(x => x.cardId == cardId)
    if (card == undefined) {
      throw new Error("Cannot find card with id " + cardId)
    }

    if (this.gameState.money < card.cost) {
      throw new Error("Don't have enough money to buy card")
    }

    this.gameState.money -= card.cost;
    card.execute(this.gameState)
  }
}
