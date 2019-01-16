import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { INCREMENT, DECREMENT } from 'src/app/reducers/counter.reducer';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.counter$ = this.store.pipe(
      pluck('counter', 'count')
    );
  }

  ngOnInit() {}

  add() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrease() {
    this.store.dispatch({ type: DECREMENT });
  }

}
