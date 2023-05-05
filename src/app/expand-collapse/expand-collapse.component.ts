import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss'],
  animations: [
    trigger('grow', [
      state(
        'closed',
        style({
          height: '0',
          overflow: 'hidden',
          marginTop: 0,
        })
      ),
      state(
        'opened',
        style({
          height: '*',
          marginTop: '10px',
        })
      ),
      transition('closed <=> opened', [
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'),
      ]),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class ExpandCollapseComponent {
  @Input('label') label = '';
  @Input('styleClass') styleClass = '';
  @Input('showPlus') showPlus = false;
  @Input('icon') icon = '';
  @Input('headerStyleClass') headerStyleClass = '';
  @Input('maxHeight') maxHeight = 300;
  @Input('id') id;

  @ViewChild('collapsible') collapsible: ElementRef;

  model = true;
  @Input('model') set _model(md: boolean) {
    this.model = md ? md : false;
  }

  @Output('modelChange') modelChange = new EventEmitter();

  startHeight: number;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}

  @HostBinding('@grow') get grow() {
    return { value: this.model, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight =
      !this.model && this.collapsible && this.collapsible.nativeElement
        ? this.collapsible.nativeElement.clientHeight
        : 0;
  }

  ngOnChanges() {
    this.setStartHeight();
  }

  change() {
    this.model = !this.model;
    this.modelChange.emit(this.model);
  }
}
