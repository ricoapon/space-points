import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../backend/game-state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() gameState: GameState;

  constructor() { }

  ngOnInit(): void {
  }

}
