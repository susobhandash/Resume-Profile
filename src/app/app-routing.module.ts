import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', redirectTo: 'about-me', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
