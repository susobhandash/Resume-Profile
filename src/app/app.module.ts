import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Generic Components
import { NavBarComponent } from './components/generic/nav-bar/nav-bar.component';
import { ExpandCollapseComponent } from './components/generic/expand-collapse/expand-collapse.component';
import { ToggleThemeComponent } from './components/generic/toggle-theme/toggle-theme.component';

// Generic Services
import { GlobalService } from './services/global.service';

// Pages
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExpandCollapseComponent,
    AboutMePageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    ToggleThemeComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
