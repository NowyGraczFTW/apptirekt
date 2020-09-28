import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchComponent} from './Search';
import {SkillzComponent} from './Skillz';
import {UsersComponent} from './Users';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'skillz', component: SkillzComponent },
  { path: 'users', component: UsersComponent },

  { path: '**', redirectTo: '/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const AppRoutingModule = RouterModule.forRoot(routes);
