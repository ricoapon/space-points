import {Component} from '@angular/core';
import {Game, GameEventType} from "../backend/game";
import {Card} from "../backend/card";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent {
  game: Game;
  shownCards: Card[];
  finishedGame: boolean = false;
  finalPoints: number;

  constructor(game: Game) {
    this.game = game;
    this.shownCards = this.game.start();
  }

  pickCard(cardId: number) {
    const gameEvent = this.game.pickCard(cardId);
    switch (gameEvent.gameEventType) {
      case GameEventType.FINISHED_GAME:
        this.finishedGame = true;
        this.finalPoints = gameEvent.finalPoints!;
        break;
      case GameEventType.NEWLY_SELECTED_CARDS:
        this.shownCards = gameEvent.cards!;
        break;
    }
  }
}
