import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  isDirty: boolean = true;

  constructor(private router: Router) {
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
