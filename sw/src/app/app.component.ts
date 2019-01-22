import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

// ! ng add @angular/pwa


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sw';

  constructor(
    private updates: SwUpdate,
    private push: SwPush // * service for push notifications
  ) {
    this.updates.available.subscribe(() => {
      console.log('App was updated');
    });

    // this,updates.checkForUpdate();

    this.push.messages.subscribe(message => {
      // * Dialogue notification message
    });
  }
}
