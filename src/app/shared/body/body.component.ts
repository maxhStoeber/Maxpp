import { Component, Input } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-body',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  @Input() collapsed = true;
  @Input() screenWidth = 0;
  getBodyClass() : string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth < 768) {
      styleClass = 'body-collapsed';
    } else if(this.collapsed && this.screenWidth >= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass
  }
}
