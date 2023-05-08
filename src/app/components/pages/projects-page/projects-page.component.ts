import { Component } from '@angular/core';
import data from '../../../../assets/data/projects';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  projects = data;
}
