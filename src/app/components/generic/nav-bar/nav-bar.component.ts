import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() model: any;
  @Input() orientation = 'vertical';
  @Input() activeIdx = 0;

  @Output() activeIdxChange = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setActiveItem(item, idx) {
    if (item.link) {
      this.router.navigate([item.link]);
    }
    this.activeIdx = idx;
    this.activeIdxChange.emit(this.activeIdx);
  }

}
