import {AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Card} from "../../backend/card";
import {GameState} from "../../backend/game-state";

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
export class CardComponent implements AfterViewChecked {
  @Input() card: Card;
  @Input() disableCard: boolean;
  @Input() gameState: GameState;
  @Output() selectCard: EventEmitter<number> = new EventEmitter<number>()
  @Output() disableOtherCards: EventEmitter<boolean> = new EventEmitter<boolean>()
  classes: String[] = []
  flipState = "inactive"

  @ViewChild('cardTitleContainer') cardTitleContainer: ElementRef;
  @ViewChild('cardTitle') cardTitle: ElementRef;
  @ViewChild('cardDescriptionContainer') cardDescriptionContainer: ElementRef;
  @ViewChild('cardDescription') cardDescription: ElementRef;

  ngAfterViewChecked(): void {
    if (!this.gameState.showSmallCards && this.cardTitleContainer) {
      this.resizeTextToFitContainer(this.cardTitleContainer, this.cardTitle, 20);
      this.resizeTextToFitContainer(this.cardDescriptionContainer, this.cardDescription, 20);
    }
  }

  private resizeTextToFitContainer(container: ElementRef, text: ElementRef, maxSize: number) {
    // https://dev.to/jankapunkt/make-text-fit-it-s-parent-size-using-javascript-m40
    let i = 5;
    let overflow = false;
    while (!overflow && i < maxSize) {
      text.nativeElement.style.fontSize = i + "px"
      // For some reason we need to do -1 on the scroll height.
      overflow = (container.nativeElement.scrollHeight - 1 > container.nativeElement.clientHeight)
      if (!overflow) i++;
    }
    // We subtract 2 from the final result to ensure the text has some slight distance to the edge.
    text.nativeElement.style.fontSize = (i-2) + "px"
  }

  canBeBought() {
    return this.card.cost <= this.gameState.money &&
      (this.card.canBeBought == undefined || this.card.canBeBought(this.gameState));
  }

  cardImage(): String {
    return '/assets/card/' + this.card.title.replace(/ /g, '') + '.png'
  }

  clickOnCard() {
    if (this.disableCard) {
      return
    }

    if (!this.canBeBought()) {
      this.classes.push("shake")
      setTimeout(() => delete this.classes[this.classes.indexOf("shake")], 820);
      return
    }

    this.disableOtherCards.emit(true)
    this.flipState = "active"
    setTimeout(() => this.selectCard.emit(this.card.cardId), 500);
  }


  determineHeight(): any {
    if (this.gameState.showSmallCards) {
      return {height: '120px'}
    } else {
      return {height: '218px'}
    }
  }
}
