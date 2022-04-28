import { Component, Input } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Inspire-Tech Demo'

  showLoader = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) this.showLoader = true;

      if (routerEvent instanceof NavigationEnd) this.showLoader = false;
    })
  }
}
