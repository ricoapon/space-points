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
  @Input() canBeBought: boolean;
  @Input() disableCard: boolean;
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()
  @Output() disableOtherCards: EventEmitter<boolean> = new EventEmitter<boolean>()
  classes: String[] = []
  flipState = "inactive"

  ngOnInit(): void {
    if (this.canBeBought) {
      this.classes.push("can-be-bought")
    } else {
      this.classes.push("can-not-be-bought")
    }
  }

  clickOnCard() {
    if (this.disableCard) {
      return
    }

    if (!this.canBeBought) {
      this.classes.push("shake")
      setTimeout(() => delete this.classes[this.classes.indexOf("shake")], 820);
      return
    }

    this.disableOtherCards.emit(true)
    this.flipState = "active"
    setTimeout(() => this.selectCard.emit(this.card.cardId), 500);
  }
}
