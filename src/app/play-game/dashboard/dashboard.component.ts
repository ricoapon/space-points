import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../../backend/game-state";
import {IconType} from "../display-icon/display-icon.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() gameState: GameState;

  SCIENCE = IconType.SCIENCE
  POINT = IconType.POINT
  FIRE_WEAPONS = IconType.FIRE_WEAPONS
  HEART = IconType.HEART
  MONEY = IconType.MONEY
  WEAPONS = IconType.WEAPONS
  BIG_LASERS = IconType.BIG_LASERS

  constructor() { }

  ngOnInit(): void {
  }

}
