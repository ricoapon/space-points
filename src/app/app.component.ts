import {AfterViewInit, Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  activeClass: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeClass = event.url.split('/')[1] || 'default';
      }
    });
  }

  ngAfterViewInit() {
    // I tested the number of stars on my own PC and scaled down the numbers based on this factor.
    const factor = window.innerWidth / 1355;

    // Note that we can always add stars, because the main screen has a background on top of the stars.
    this.createInitialStars(1, 100 * factor);
    this.createInitialStars(2, 85 * factor);
    this.createInitialStars(3, 70 * factor);
    interval(3_000).subscribe(()=> {
      this.createBottomStars(1, this.randomNumber(1, Math.min(8 * factor, 1)))
      this.createBottomStars(2, this.randomNumber(1, Math.min(6 * factor, 1)))
      this.createBottomStars(3, this.randomNumber(1, Math.min(4 * factor, 1)))
    })
  }

  private createBottomStars(type: number, quantity: number) {
    this.createStars(type, quantity, () => 0)
  }

  private createInitialStars(type: number, quantity: number) {
    this.createStars(type, quantity, () => this.randomNumber(1, 99))
  }

  private createStars(type: number, quantity: number, bottom: () => number) {
    for (let i = 0; i < quantity; i++) {
      let star = document.createElement('div');
      let animationDuration = this.randomNumber(75, 150)
      star.classList.add('star', 'type' + type)
      star.style.animationDuration = animationDuration + "s";
      star.style.left = this.randomNumber(1, 99) + "%";
      star.style.bottom = bottom() + "%";
      document.body.appendChild(star);
       setTimeout(() => document.body.removeChild(star), animationDuration * 1000)
    }
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }
}
