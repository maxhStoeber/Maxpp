import { Component } from '@angular/core';
import {navbarData} from "./nav-data";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   collapsed = false;
   navData = navbarData;
}
