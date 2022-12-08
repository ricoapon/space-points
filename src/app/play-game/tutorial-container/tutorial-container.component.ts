import {Component, OnInit} from '@angular/core';
import {IconType} from "../display-icon/display-icon.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tutorial-container',
  templateUrl: './tutorial-container.component.html',
  styleUrls: ['./tutorial-container.component.css']
})
export class TutorialContainerComponent implements OnInit {
  tutorialStep: number = 1

  MENU = IconType.MENU
  POINT = IconType.POINT
  HEART = IconType.HEART
  MONEY = IconType.MONEY
  SMALL_LASERS = IconType.SMALL_LASERS
  BIG_LASERS = IconType.BIG_LASERS

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
