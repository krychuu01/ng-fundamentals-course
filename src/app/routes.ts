import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {ErrorsComponent} from "./errors/errors.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {EventsListResolverService} from "./events/events-list-resolver.service";
import {CreateSessionComponent} from "./events/event-details/create-session/create-session.component";


export const appRoutes : Routes = [

  {path: 'events/new', component: CreateEventComponent},

  {path: 'events', component: EventsListComponent, resolve: {
    events: EventsListResolverService}
    },

  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},

  {path: 'events/session/new', component: CreateSessionComponent},

  {path: '404', component: ErrorsComponent},

  {path: '', redirectTo: '/events', pathMatch: 'full'},

  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), }
]
