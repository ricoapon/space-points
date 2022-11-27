import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './play-game/card/card.component';
import {DashboardComponent} from './play-game/dashboard/dashboard.component';
import {CardContainerComponent} from './play-game/card-container/card-container.component';
import {PlayGameComponent} from './play-game/play-game.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {AppRoutingModule} from "./app-routing.module";
import {ManualComponent} from './manual/manual.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DisplayIconComponent} from './play-game/display-icon/display-icon.component';
import {TutorialContainerComponent} from './play-game/tutorial-container/tutorial-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from "@angular/common/http";
import {HighscoreScreenComponent} from './highscore-screen/highscore-screen.component';
import {SubmitHighscoreScreenComponent} from './submit-highscore-screen/submit-highscore-screen.component';
import {FormsModule} from "@angular/forms";
import {FrameComponent} from './play-game/card/frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    CardContainerComponent,
    PlayGameComponent,
    StartScreenComponent,
    ManualComponent,
    DisplayIconComponent,
    TutorialContainerComponent,
    HighscoreScreenComponent,
    SubmitHighscoreScreenComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
