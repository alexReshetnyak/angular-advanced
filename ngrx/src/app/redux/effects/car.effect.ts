import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { CAR_ACTION, AddCar, LoadCars } from '../actions/cars.action';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Injectable()
export class CarsEffect {

  constructor(
    private actions$: Actions,
    private carService: CarsService
  ) {}


  @Effect() loadCars: Observable<LoadCars> = <Observable<LoadCars>>this.actions$
    .pipe(
      ofType(CAR_ACTION.ADD_CAR),
      switchMap((action: AddCar) => {
        return this.carService.preloadCars();
      }),
      map((cars: Car[]) => {
        return {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        };
      })
    );
}
