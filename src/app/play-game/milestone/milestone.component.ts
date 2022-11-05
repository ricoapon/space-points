import {Component, Input, OnInit} from '@angular/core';
import {Milestone} from "../../backend/milestone";
import {GameState} from "../../backend/game-state";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
  @Input() gameState: GameState;
  @Input() milestone: Milestone;
  @Input() achieved: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
