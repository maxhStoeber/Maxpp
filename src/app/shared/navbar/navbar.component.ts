import {Component, EventEmitter, HostListener, HostBinding, Output, OnInit} from '@angular/core';
import {navbarData} from "./nav-data";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {state, animate, style, transition, trigger, keyframes} from "@angular/animations";

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
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms', style({opacity: 0}))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: 0}),
            style({transform: 'rotate(360deg)', offset: 1})
            ])
        )
        ])
    ])
]})
export class NavbarComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
   collapsed = false;
   screenWidth= 0 ;
   navData = navbarData;

   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
     this.screenWidth = window.innerWidth;
     if(this.screenWidth <= 768) {
       this.collapsed = true;
       this.onToggleSidenav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
     }
   }
   ngOnInit() {
     this.screenWidth = window.innerWidth;
   }

  toggleCollapse(): void {
     this.collapsed = !this.collapsed;
     this.onToggleSidenav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
   }
  closeSidenav(): void {
     this.collapsed = true;
      this.onToggleSidenav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
   }
}
