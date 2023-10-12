import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from "./events/events-list.component";
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {EventService} from "./events/shared/event.service";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {appRoutes} from "./routes";
import { CreateEventComponent } from './events/createevent/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {EventsListResolverService} from "./events/events-list-resolver.service";
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventsListResolverService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {

}
