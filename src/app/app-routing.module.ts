import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: 'vote',
    component: VoteComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
