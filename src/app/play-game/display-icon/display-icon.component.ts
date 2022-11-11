import {Component, Input} from '@angular/core';

export enum IconType {
  MONEY,
  POINT,
  SCIENCE,
  MONEY_PRODUCTION,
  POINT_PRODUCTION,
  HEART,
}

@Component({
  selector: 'app-display-icon',
  templateUrl: './display-icon.component.html',
  styleUrls: ['./display-icon.component.css']
})
export class DisplayIconComponent {
  @Input() iconType: IconType;
  @Input() color: String;

  getIsProduction(): boolean {
    return IconType[this.iconType].indexOf("PRODUCTION") > 0
  }

  getPathToIcon() {
    let name: String;
    if (this.iconType == IconType.MONEY_PRODUCTION) {
      name = IconType[IconType.MONEY].toLowerCase()
    } else if (this.iconType == IconType.POINT_PRODUCTION) {
      name = IconType[IconType.POINT].toLowerCase()
    } else {
      name = IconType[this.iconType].toLowerCase()
    }
    return "/assets/icons/" + name + ".svg#icon"
  }

  determineStyle() {
    return {color: "var(--bs-" + this.determineColor() + ")"};
  }

  private determineColor(): String {
    if (this.color != undefined && this.color.length > 0) {
      return this.color
    }

    switch (this.iconType) {
      case IconType.MONEY:
      case IconType.MONEY_PRODUCTION:
        return "yellow"
      case IconType.POINT:
      case IconType.POINT_PRODUCTION:
        return "green"
      case IconType.SCIENCE:
        return "purple"
      case IconType.HEART:
        return "red"
    }
  }
}
