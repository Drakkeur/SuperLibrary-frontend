import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManageSubscribersComponent } from './librarian-menu/manage-subscribers/manage-subscribers.component';
import { AddNewSubscriberComponent } from './librarian-menu/manage-subscribers/add-new-subscriber/add-new-subscriber.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'managesubs', component: ManageSubscribersComponent},
  { path : 'managesubs/newsub', component: AddNewSubscriberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }