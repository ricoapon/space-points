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
  HEART = IconType.HEART
  MONEY = IconType.MONEY
  MONEY_PRODUCTION = IconType.MONEY_PRODUCTION
  POINT_PRODUCTION = IconType.POINT_PRODUCTION

  constructor() { }

  ngOnInit(): void {
  }

}
