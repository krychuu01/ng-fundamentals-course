import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {EventService} from "../shared/event.service";

@Injectable(

)
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
      const eventExsists = !this.eventService.getEvent(route.params['id']);
      console.log("eventExists: ", eventExsists)
      if (!eventExsists) {
        this.router.navigate(['/404'])
      }
      return eventExsists;
  }

}
