import {Component, OnInit} from '@angular/core';
import {HighscoreManager} from "../backend/highscore-manager";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-submit-highscore-screen',
  templateUrl: './submit-highscore-screen.component.html',
  styleUrls: ['./submit-highscore-screen.component.css']
})
export class SubmitHighscoreScreenComponent implements OnInit {
  state: number
  name: string

  constructor(private highscoreManager: HighscoreManager, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private router: Router, private cookieService: CookieService) {
    if (this.router.getCurrentNavigation() !== undefined && this.router.getCurrentNavigation()!.extras !== undefined && this.router.getCurrentNavigation()!.extras.state !== undefined) {
      this.state = this.router.getCurrentNavigation()!.extras.state!['highscore']
    } else {
      // This page was reached in an incorrect way. Return to the main screen.
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    const highscoreName = this.cookieService.get('highscore_name')
    if (highscoreName !== undefined && highscoreName.trim().length > 0) {
      this.name = highscoreName
    }
  }

  submit(): void {
    this.cookieService.set('highscore_name', this.name, 365)
    this.highscoreManager.addHighscore({name: this.name, score: this.state}).subscribe(
      // Go to the highscore page when submitting succeeded.
      () => this.router.navigate(['/highscore'])
    )
  }

}
