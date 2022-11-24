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
    return {color: "var(--bs-" + this.determineColor() + ")"};
  }

  determineSizeInPixels(): String {
    // Firefox does not allow styling width on the svg tag. To fix this, we must set the "width" attribute this way.
    // A bit annoying, but it is what it is. Works on all browsers correctly with this approach.
    switch(this.iconSize) {
      case IconSize.SMALL:
        return "23px";
      case IconSize.NORMAL:
        return "45px";
    }
  }

  private determineColor(): String {
    return "white"
  }
}
