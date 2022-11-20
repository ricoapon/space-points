import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {PlayGameComponent} from "./play-game/play-game.component";
import {ManualComponent} from "./manual/manual.component";
import {TutorialContainerComponent} from "./play-game/tutorial-container/tutorial-container.component";
import {HighscoreScreenComponent} from "./highscore-screen/highscore-screen.component";
import {SubmitHighscoreScreenComponent} from "./submit-highscore-screen/submit-highscore-screen.component";

const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'game', component: PlayGameComponent},
  {path: 'manual', component: ManualComponent},
  {path: 'tutorial', component: TutorialContainerComponent},
  {path: 'highscore', component: HighscoreScreenComponent},
  {path: 'submit-highscore', component: SubmitHighscoreScreenComponent},
  {path: '**', redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
