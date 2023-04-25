import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Susobhan Dash Resume';
  name = 'Susobhan';

  navBarItems = [
    {label: 'About Me', icon: 'fas fa-user'},
    {label: 'Projects', icon: 'fas fa-code-fork'},
    {label: 'Skills', icon: 'fas fa-list-check'},
    {label: 'Contact', icon: 'fas fa-phone'},
  ];
  activeIdx = 0;
}
