import { Component } from '@angular/core';
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [`
    .nav.navbar-nav {
      font-size: 15px;
    }
    #searchForm {margin-right: 100px;}

    @media (max-width: 1200px) {
      #searchForm {
        display: none;
      }
    }
    li > a.active {color: #F97924;}
  `]
})
export class NavbarComponent {
    constructor(public authService: AuthService) {

    }
}
