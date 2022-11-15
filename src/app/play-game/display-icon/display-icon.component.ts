import {Component, Input} from '@angular/core';

export enum IconType {
  MONEY,
  POINT,
  SMALL_LASERS,
  BIG_LASERS,
  HEART,
  FIRE_LASERS,
  MENU,
}

export enum IconSize {
  SMALL,
  NORMAL,
}

@Component({
  selector: 'app-display-icon',
  templateUrl: './display-icon.component.html',
  styleUrls: ['./display-icon.component.css']
})
export class DisplayIconComponent {
  @Input() iconType: IconType;
  @Input() color: String;
  @Input() iconSize: IconSize = IconSize.NORMAL;

  getPathToIcon() {
    let name: String = IconType[this.iconType].toLowerCase()
    return "/assets/icons/" + name + ".svg#icon"
  }

  determineStyle() {
    return {color: "var(--bs-" + this.determineColor() + ")", width: this.determineSizeInPixels()};
  }

  private determineSizeInPixels(): number {
    switch(this.iconSize) {
      case IconSize.SMALL:
        return 23;
      case IconSize.NORMAL:
        return 45;
    }
  }

  private determineColor(): String {
    return "white"
  }
}
