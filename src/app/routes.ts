import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/createevent/create-event.component";
import {ErrorsComponent} from "./errors/errors.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {resolve} from "@angular/compiler-cli";
import {EventsListResolverService} from "./events/events-list-resolver.service";


export const appRoutes : Routes = [

  {path: 'events/new', component: CreateEventComponent},

  {path: 'events', component: EventsListComponent, resolve: {
    events: EventsListResolverService}
    },

  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},

  {path: '404', component: ErrorsComponent},

  {path: '', redirectTo: '/events', pathMatch: 'full'},

  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), }
]
