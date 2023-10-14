import {Component, Input, Output} from "@angular/core";
import {ISession} from "../shared/event.model";

@Component({
  selector: 'collapsible-well',
  template: `
   <div (click)="toggleContent()" class="well pointable">
     <h4>
       <ng-content select="[well-title]"></ng-content>
     </h4>
     <ng-content *ngIf="visible" select="[well-body]"></ng-content>
   </div>
  `
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }

}
