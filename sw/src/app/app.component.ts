import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

// ! ng add @angular/pwa


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sw';

  constructor(
    private updates: SwUpdate
  ) {
    this.updates.available.subscribe(() => {
      console.log('App was updated');
    });
  }
}
