import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Card} from "../../backend/card";

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnChanges {
  @Input() shownCards: Card[];
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()
  disableCards = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.disableCards = false;
  }

}
