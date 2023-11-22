import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { AbbountComponent } from './template/abbount/abbount.component';
import { ProofComponent } from './template/proof/proof.component';
import { MyProjectsComponent } from './template/my-projects/my-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abbount', component: AbbountComponent },
  { path: 'proof', component: ProofComponent },
  { path: 'projects', component: MyProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
