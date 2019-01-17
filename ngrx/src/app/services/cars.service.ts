import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";

import { LoadCars } from "../redux/actions/cars.action";
import { CarState } from "../redux/states/car.state";
import { Car } from "../models/car.model";

@Injectable({
  providedIn: "root"
})
export class CarsService {
  private readonly BASE_URL = "http://localhost:3000/";

  constructor(private http: HttpClient, private store: Store<CarState>) {}

  public async loadCars(): Promise<any> {
    const cars: Car[] = await (<Car[]>(
      (<unknown>this.http.get(this.BASE_URL + "cars").toPromise())
    ));

    this.store.dispatch(new LoadCars(cars));
  }
}
