import { Component, OnInit } from '@angular/core';
import {allMilestones, Milestone} from "../backend/milestone";
import {INITIAL_MAX_HEALTH, INITIAL_NR_OF_CARDS_PER_DRAFT} from "../backend/game-state";
import {allCards, Card} from "../backend/card";

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  // Make it available in the HTML.
  readonly INITIAL_MAX_HEALTH = INITIAL_MAX_HEALTH
  readonly INITIAL_NR_OF_CARDS_PER_DRAFT = INITIAL_NR_OF_CARDS_PER_DRAFT

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
