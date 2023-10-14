import {Component, OnInit} from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEvent} from "../shared/event.model";

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .event-image {
      height: 100px;
    }
  `]
})
export class EventDetailsComponent implements OnInit {

  event!: IEvent;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }

  addSession() {
    this.router.navigate(['events/session/new'])
  }

}
