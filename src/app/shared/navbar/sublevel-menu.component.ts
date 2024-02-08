import {Component, Input, OnInit} from '@angular/core';
import {INavbarData} from "./helper";
import {NgClass, NgIf} from "@angular/common";
import {navbarData} from "./nav-data";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [
    NgIf,
    RouterLinkActive,
    NgClass,
    RouterLink
  ],
  template: `
    <ul *ngIf="!collapsed && data.items && data.items.length > 0"
        [@submenu]="expanded
        ? {value: 'visible', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height:'*'}}
        : {value: 'hidden', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height:'0'}}"
        class="sublevel-nav">
      @for (item of data.items; track item.label) {
        <li class="sublevel-nav-item">
          <a class="sublevel-nav-link Version1" [routerLink]="item.routelink"
             *ngIf="item.items && item.items.length > 0"
             (click)="handleClick(item)"
             routerLinkActive="active"
             [routerLinkActiveOptions]="{exact: true}"
          >
            <i class="sublevel-link-icon fa-solid fa-circle"></i>
            <span class="sublevel-link-text" *ngIf="!collapsed">{{ item.label }}</span>
            <i *ngIf="item.items && !collapsed" class="menu-collapse-icon"
               [ngClass]="!item.expanded ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-down'"
            ></i>
          </a>
          <div *ngIf="item.items && item.items.length > 0">
            <app-sublevel-menu
              [data]="item"
              [collapsed]="collapsed"
              [expanded]="item.expanded"
              [multiple]="multiple">
            </app-sublevel-menu>
          </div>
          <a class="sublevel-nav-link Version2"
             *ngIf="!item.items || (item.items && item.items.length === 0)"
             [routerLink]="item.routelink"
             routerLinkActive="active-sublevel"
             [routerLinkActiveOptions]="{exact: true}"
          >
            <i class="sublevel-link-icon" [class]="item.icon ? item.icon : 'fa-solid fa-circle'"></i>
            <span class="sublevel-link-text" *ngIf="!collapsed">{{ item.label }} TEST</span>

          </a>
        </li>
      } @empty {
        <p>TESTING</p>
      }
    </ul>
  `,
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('hidden <=> visible', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit{
  @Input() data: INavbarData = {
    routelink: '',
    icon: '',
    label: '',
    items: []
  };
  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined ;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() {
  }
  ngOnInit(): void {
  }
handleClick(item: any):void{
    if(!this.multiple){
      if(this.data.items && this.data.items.length > 0){
        this.data.items.forEach((modelItem: any) => {
          if(modelItem !== item && modelItem.expanded){
            modelItem.expanded = false;
          }
        });
      }
    }
    item.expanded = !item.expanded;
}


  protected readonly navData = navbarData;
}
