import { Component } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

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
    state.set(ITEMS, [11]);
    const items = state.get(ITEMS, []);

    console.log('appComp Items:', items);
  }
}
