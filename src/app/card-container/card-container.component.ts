import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../backend/card";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() shownCards: Card[];
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

}
