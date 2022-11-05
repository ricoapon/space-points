import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../backend/card";

@Component({
  selector: 'app-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
  }

}
