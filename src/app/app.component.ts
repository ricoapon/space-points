import { Component } from '@angular/core';
import {Game} from "./backend/game";
import {Card} from "./backend/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
