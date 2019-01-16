import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './models/car.model';
import { Store } from '@ngrx/store';
import { CarState } from './redux/states/car.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  public carState$: Observable<Cars>;

  constructor(private store: Store<CarState>) {}

  ngOnInit() {
    this.carState$ = this.store.select('carPage');
  }
}
