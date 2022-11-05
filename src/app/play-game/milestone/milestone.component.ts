import {Component, Input, OnInit} from '@angular/core';
import {Milestone} from "../../backend/milestone";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {
  @Input() milestone: Milestone;
  @Input() achieved: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getAchievedClass() : String {
    if (this.achieved) {
      return 'achieved'
    }
    return 'not-achieved'
  }
}
