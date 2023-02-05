import {Component, OnInit} from '@angular/core';
import {Game, GameEventType} from "../backend/game";
import {Card} from "../backend/card";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TutorialContainerComponent} from "./tutorial-container/tutorial-container.component";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  game: Game;
  shownCards: Card[];

  constructor(game: Game, private modalService: NgbModal, private cookieService: CookieService, private router: Router) {
    this.game = game;
    this.shownCards = this.game.start(this.cookieService.get("show_small_cards") == 'true');
  }

  ngOnInit(): void {
    if (this.cookieService.get('finished_tutorial') != 'true') {
      this.startupTutorial()
    }
  }

  pickCard(cardId: number) {
    const gameEvent = this.game.pickCard(cardId);
    switch (gameEvent.gameEventType) {
      case GameEventType.FINISHED_GAME:
        this.router.navigateByUrl('/submit-highscore', {state: {highscore: gameEvent.finalPoints!}})
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
      () => {
        // It doesn't matter how the user closed the tutorial: don't show it again.
        this.cookieService.set('finished_tutorial', 'true', 365)
      },
    );
  }
}
