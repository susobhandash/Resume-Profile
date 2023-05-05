import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Generic Components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse.component';

// Generic Services
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExpandCollapseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
