import { Component } from '@angular/core';
import data from '../../../../assets/data/aboutMe'

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent {
  aboutMe = data;
}
