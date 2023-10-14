import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from "./events/events-list.component";
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EventService} from "./events/shared/event.service";
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {appRoutes} from "./routes";
import {CreateEventComponent} from './events/create-event/create-event.component';
import {ErrorsComponent} from './errors/errors.component';
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {EventsListResolverService} from "./events/events-list-resolver.service";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from "./events/common/collapsible-well.component";
import {DurationPipe} from "./events/shared/duration.pipe";
import {Toastr, TOASTR_TOKEN} from "./events/common/toastr.service";


declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivatorService,
    EventsListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}
