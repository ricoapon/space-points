import {Component, OnInit} from '@angular/core';
import {Game, GameEventType} from "../backend/game";
import {Card} from "../backend/card";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TutorialContainerComponent} from "./tutorial-container/tutorial-container.component";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  game: Game;
  shownCards: Card[];
  finishedGame: boolean = false;
  finalPoints: number;

  constructor(game: Game, private modalService: NgbModal) {
    this.game = game;
    this.shownCards = this.game.start();
  }

  ngOnInit(): void {
    this.startupTutorial()
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

  startupTutorial() {
    this.modalService.open(TutorialContainerComponent, {
      centered: true, backdrop: 'static',
      keyboard: false
    }).result.then(
      (result) => {
        // TODO: remember that we don't need to open tutorial anymore.
      },
    );
  }
}
