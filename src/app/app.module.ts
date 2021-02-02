import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

/* components */
import { VotingboxComponent } from './components/votingbox/votingbox.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { BlankpageComponent } from './components/blankpage/blankpage.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingboxComponent,
    HeaderComponent,
    CharactersComponent,
    HomeComponent,
    BlankpageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }