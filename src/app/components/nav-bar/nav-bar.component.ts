import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  setActiveItem(item, idx) {
    this.activeIdx = idx;
    this.activeIdxChange.emit(this.activeIdx);
  }

}
