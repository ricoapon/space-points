import {Component, OnInit, SecurityContext} from '@angular/core';
import {Highscore, HighscoreManager} from "../backend/highscore-manager";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-highscore-screen',
  templateUrl: './highscore-screen.component.html',
  styleUrls: ['./highscore-screen.component.css']
})
export class HighscoreScreenComponent implements OnInit {
  highscores: Highscore[] = []

  constructor(private highscoreManager: HighscoreManager, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.highscoreManager.retrieveTop5().subscribe({
      next: (newHighscores) => {
        this.highscores = newHighscores
      }
    })
  }

  sanitize(name: String): String {
    return this.sanitizer.sanitize(SecurityContext.HTML, name) || "sneaky-beaky-like"
  }
}
