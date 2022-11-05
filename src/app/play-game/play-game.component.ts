import {Component} from '@angular/core';
import {Game} from "../backend/game";
import {Card} from "../backend/card";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent {
  game: Game;
  shownCards: Card[];

  constructor(game: Game) {
    this.game = game;
    this.shownCards = this.game.start();
  }

  pickCard(cardId: number) {
    this.shownCards = this.game.pickCard(cardId);
  }
}
