import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styles: [`
    .pad-left {
    margin-left: 10px;
  }
    .well div {
    color: #bbb;
  }
    .thumbnail {
      min-height: 230px;
    }
  `]
})
export class EventsThumbnailComponent {

  @Input()
  event: any;

}
