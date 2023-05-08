import { Component } from '@angular/core';
import techSkills from '../../../../assets/data/skills';
import { libSkills } from '../../../../assets/data/skills';
import { softSkills } from '../../../../assets/data/skills';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {
  techSkills = techSkills;
  libSkills = libSkills;
  softSkills = softSkills;

  programmingExpanded = true;
  libraryExpanded = true;
  softSkillsExpanded = true;
}
