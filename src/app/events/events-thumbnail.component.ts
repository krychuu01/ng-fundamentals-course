import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from "./shared/event.model";

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
  event!: IEvent;

  getStartTimeClass() : any{
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300',  'font-weight': 'bold'};
    }
    return {};
  }

}
