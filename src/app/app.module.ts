import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { HeaderComponent } from './header/header.component';
import { SmartphoneNavigationComponent } from './smartphone-navigation/smartphone-navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { InstrumentsVoteComponent } from './instruments-vote/instruments-vote.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { InstrumentsRankComponent } from './instruments-rank/instruments-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    HeaderComponent,
    SmartphoneNavigationComponent,
    NotFoundComponent,
    HomeComponent,
    VoteComponent,
    InstrumentsVoteComponent,
    LeaderboardComponent,
    InstrumentsRankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
