import { Component, OnInit } from '@angular/core';
import {allMilestones, Milestone} from "../backend/milestone";
import {INITIAL_MAX_NR_OF_TURNS} from "../backend/game-state";
import {allCards, Card} from "../backend/card";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  // Make it available in the HTML.
  readonly INITIAL_MAX_NR_OF_TURNS = INITIAL_MAX_NR_OF_TURNS

  constructor() { }

  ngOnInit(): void {
  }

  getAllMilestones(): Milestone[] {
    return allMilestones()
  }

  getAllCards(): Card[] {
    return allCards()
  }
}
