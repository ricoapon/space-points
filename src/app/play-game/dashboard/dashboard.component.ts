import {Component, Inject, Input, OnInit} from '@angular/core';
import {GameState} from "../../backend/game-state";
import {IconType} from "../display-icon/display-icon.component";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() gameState: GameState;

  POINT = IconType.POINT
  FIRE_LASERS = IconType.FIRE_LASERS
  HEART = IconType.HEART
  MONEY = IconType.MONEY
  SMALL_LASERS = IconType.SMALL_LASERS
  BIG_LASERS = IconType.BIG_LASERS
  MENU = IconType.MENU

  elem: any;
  isFullScreen = false;

  constructor(@Inject(DOCUMENT) private document: any) {}

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

}
