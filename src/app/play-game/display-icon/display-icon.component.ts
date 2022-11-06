import {Component, Input} from '@angular/core';

export enum IconType {
  MONEY,
  POINT,
  SCIENCE,
  FARM,
}

@Component({
  selector: 'app-display-icon',
  templateUrl: './display-icon.component.html',
  styleUrls: ['./display-icon.component.css']
})
export class DisplayIconComponent {
  @Input() iconType: IconType;

  getPathToIcon() {
    return "/assets/icons/" + IconType[this.iconType].toLowerCase() + ".svg#icon"
  }

  determineStyle() {
    return {color: "var(--bs-" + this.determineColor() + ")"};
  }

  private determineColor(): String {
    switch (this.iconType) {
      case IconType.MONEY:
        return "yellow"
      case IconType.POINT:
        return "green"
      case IconType.FARM:
        return "white"
      case IconType.SCIENCE:
        return "purple"
    }
  }
}
