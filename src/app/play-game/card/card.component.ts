import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Card} from "../../backend/card";

@Component({
  selector: 'app-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() disableCard: boolean;
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()
  @Output() disableOtherCards: EventEmitter<boolean> = new EventEmitter<boolean>()
  flipState = "inactive"

  ngOnInit(): void {
  }

  clickOnCard() {
    if (this.disableCard) {
      return
    }

    this.disableOtherCards.emit(true)
    this.flipState = "active"
    setTimeout(() => this.selectCard.emit(this.card.cardId), 500);
  }
}
