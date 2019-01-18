import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Car } from 'src/app/models/car.model';
import { DeleteCar, UpdateCar } from 'src/app/redux/actions/cars.action';
import { CarState } from 'src/app/redux/states/car.state';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(
    private store: Store<CarState>,
    private carService: CarsService
  ) {}

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
  }

}
