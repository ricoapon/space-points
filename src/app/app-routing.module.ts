import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {PlayGameComponent} from "./play-game/play-game.component";
import {ManualComponent} from "./manual/manual.component";

const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'game', component: PlayGameComponent},
  {path: 'manual', component: ManualComponent},
  {path: '**', redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
