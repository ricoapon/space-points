import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './play-game/card/card.component';
import {DashboardComponent} from './play-game/dashboard/dashboard.component';
import {MilestoneContainerComponent} from './play-game/milestone-container/milestone-container.component';
import {CardContainerComponent} from './play-game/card-container/card-container.component';
import {MilestoneComponent} from './play-game/milestone/milestone.component';
import {PlayGameComponent} from './play-game/play-game.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {AppRoutingModule} from "./app-routing.module";
import { ManualComponent } from './manual/manual.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DisplayIconComponent } from './play-game/display-icon/display-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    MilestoneContainerComponent,
    CardContainerComponent,
    MilestoneComponent,
    PlayGameComponent,
    StartScreenComponent,
    ManualComponent,
    DisplayIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
