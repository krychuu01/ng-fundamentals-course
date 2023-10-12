import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {EventService} from "./shared/event.service";
import {map} from "rxjs";

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {
  }
  resolve(): any {
    return this.eventService.getEvents().pipe(map(events => events))
  }

}
