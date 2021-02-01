import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* components */

import { VotingboxComponent } from './components/votingbox/votingbox.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }