import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AboutMePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
