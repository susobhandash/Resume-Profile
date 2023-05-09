import { Component } from '@angular/core';
import contactDetails from '../../../../assets/data/contact';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  contactDetails: any = contactDetails;

  constructor(
    public globalService: GlobalService
  ) {
  }

}
