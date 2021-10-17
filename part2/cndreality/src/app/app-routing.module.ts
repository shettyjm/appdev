// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {  AuthGuard } from './guard/auth.guard';

import { AboutComponent } from './components/about/about.component';
import { CovidsafezoneComponent } from './components/covidsafezone/covidsafezone.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
   // { path: 'doctors', component: DoctorsComponent,canActivate: [AlwaysAuthGuard] },
   { path: 'home', component: HomeComponent},
   { path: 'about', component: AboutComponent },
   { path: 'covid', component: CovidsafezoneComponent,canActivate: [AuthGuard] } ,
   {path: '**', redirectTo: '/#home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











// const routes1: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent},

//   { path: 'covid', component: DoctorsComponent,canActivate: [AlwaysAuthGuard] },
//   { path: 'docdummy', component: DocdummyComponent },
//   { path: '**', redirectTo: '' }
// ];
