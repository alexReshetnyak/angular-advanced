import { Component } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';

import { CarState } from 'src/app/redux/states/car.state';
import { Car } from 'src/app/models/car.model';
import { AddCar } from 'src/app/redux/actions/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  public carName = '';
  public carModel = '';

  private id = 2;

  constructor(private store: Store<CarState>) {}

  onAdd() {
    if (this.carModel === '' || this.carName === '') { return; }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    // todo
  }

}
