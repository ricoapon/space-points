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
    return "white"
  }
}
