import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../../backend/game-state";
import {Milestone} from "../../backend/milestone";

@Component({
  selector: 'app-milestone-container',
  templateUrl: './milestone-container.component.html',
  styleUrls: ['./milestone-container.component.css']
})
export class MilestoneContainerComponent implements OnInit {
  @Input() gameState: GameState;

  constructor() { }

  ngOnInit(): void {
  }

  achievedMilestone(milestone: Milestone): boolean {
    for (let achievedMilestoneId of this.gameState.achievedMilestoneIds) {
      if (milestone.milestoneId == achievedMilestoneId) {
        return true;
      }
    }

    return false;
  }

}
