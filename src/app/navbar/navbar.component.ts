import { Component } from '@angular/core';

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
  `]
})
export class NavbarComponent {

}
