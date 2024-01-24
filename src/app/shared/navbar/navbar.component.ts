import {Component, EventEmitter, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
   collapsed = true;
   screenWidth= 0 ;
   navData = navbarData;


  toggleCollapse(): void {
     this.collapsed = !this.collapsed;
     this.onToggleSidenav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
   }
  closeSidenav(): void {
     this.collapsed = true;
      this.onToggleSidenav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
   }
}
