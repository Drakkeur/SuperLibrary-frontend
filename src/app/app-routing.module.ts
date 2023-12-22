import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManageSubscribersComponent } from './librarian-menu/manage-subscribers/manage-subscribers.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'managesubs', component: ManageSubscribersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }