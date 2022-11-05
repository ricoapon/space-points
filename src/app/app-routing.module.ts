import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartScreenComponent} from "./start-screen/start-screen.component";
import {PlayGameComponent} from "./play-game/play-game.component"; // CLI imports router

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game', component: PlayGameComponent },
  { path: '**', component: StartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
