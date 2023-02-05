import {Component, Inject, Input, OnInit} from '@angular/core';
import {GameState} from "../../backend/game-state";
import {IconType} from "../display-icon/display-icon.component";
import {DOCUMENT} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {TutorialContainerComponent} from "../tutorial-container/tutorial-container.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() gameState: GameState;

  POINT = IconType.POINT
  HEART = IconType.HEART
  MONEY = IconType.MONEY
  SMALL_LASERS = IconType.SMALL_LASERS
  BIG_LASERS = IconType.BIG_LASERS
  MENU = IconType.MENU

  elem: any;
  isFullScreen = false;

  constructor(@Inject(DOCUMENT) private document: any, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  toggleFullScreen() {
    if (this.isFullScreen) {
      this.closeFullscreen()
      this.isFullScreen = false
    } else {
      this.openFullscreen()
      this.isFullScreen = true
    }
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  BACK_TO_MENU = "back-to-menu"
  START_TUTORIAL = "start-tutorial"

  open(content: any) {
    this.modalService.open(content, {centered: true}).result.then(
      (result) => {
        if (result === this.BACK_TO_MENU) {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(["/"])
        } else if (result === this.START_TUTORIAL) {
          this.startTutorial()
        }
      },
    ).catch(() => {
      // When somebody clicks outside the modal, it closes the modal and throws an error. We don't care.
    });
  }

  startTutorial() {
    this.modalService.open(TutorialContainerComponent, {centered: true})
  }
}
