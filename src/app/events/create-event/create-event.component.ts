import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {IEvent} from "../shared/event.model";
import {EventService} from "../shared/event.service";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
    .error input {background: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :-ms-input-placeholder {color: #999}
  `]
})
export class CreateEventComponent {

  newEvent!: IEvent;

  isDirty: boolean = true;

  constructor(private router: Router,
              private eventService: EventService) {
  }

  saveEvent(formValues: IEvent) {
    console.log(formValues)
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
