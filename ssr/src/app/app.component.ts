import { Component } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

// * ng generate universal ngw-app-shell --client-project ssr

const ITEMS = makeStateKey('items');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr';

  constructor(
    state: TransferState // * service that working like storage
  ) {
    const items = state.get(ITEMS, []);

    if (!items) {
      state.get(ITEMS, []);
    }

    console.log('appComp Items:', items);
  }
}
