import {Component, OnInit} from '@angular/core';
import {HighscoreManager} from "../backend/highscore-manager";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-submit-highscore-screen',
  templateUrl: './submit-highscore-screen.component.html',
  styleUrls: ['./submit-highscore-screen.component.css']
})
export class SubmitHighscoreScreenComponent implements OnInit {
  state: number
  name: String

  constructor(private highscoreManager: HighscoreManager, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private router: Router) {
    if (this.router.getCurrentNavigation() !== undefined && this.router.getCurrentNavigation()!.extras !== undefined && this.router.getCurrentNavigation()!.extras.state !== undefined) {
      this.state = this.router.getCurrentNavigation()!.extras.state!['highscore']
    } else {
      // This page was reached in an incorrect way. Return to the main screen.
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.highscoreManager.addHighscore({name: this.name, score: this.state}).subscribe(
      // Go to the highscore page when submitting succeeded.
      () => this.router.navigate(['/highscore'])
    )
  }

}
