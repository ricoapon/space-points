import {Component, Input} from '@angular/core';

export enum IconType {
  MONEY,
  POINT,
  SCIENCE,
  WEAPONS,
  BIG_LASERS,
  HEART,
  FIRE_WEAPONS,
}

@Component({
  selector: 'app-display-icon',
  templateUrl: './display-icon.component.html',
  styleUrls: ['./display-icon.component.css']
})
export class DisplayIconComponent {
  @Input() iconType: IconType;
  @Input() color: String;

  getPathToIcon() {
    let name: String = IconType[this.iconType].toLowerCase()
    return "/assets/icons/" + name + ".svg#icon"
  }

  determineStyle() {
    return {color: "var(--bs-" + this.determineColor() + ")"};
  }

  private determineColor(): String {
    return "white"
  }
}
