import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {navbarData} from "../navbar/nav-data";
import {RouterOutlet} from "@angular/router";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

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
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  getHeaderClass() : string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth < 768) {
      styleClass = 'header-collapsed';
    } else if(this.collapsed && this.screenWidth >= 768 && this.screenWidth > 0) {
      styleClass = 'header-md-screen';
    }
    return styleClass
  }

  toggleMenu() {

  }
}
