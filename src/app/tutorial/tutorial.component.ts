import { Component, OnInit } from '@angular/core';
import {allMilestones, Milestone} from "../backend/milestone";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAllMilestones(): Milestone[] {
    return allMilestones()
  }
}
