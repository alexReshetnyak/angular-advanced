
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { LoadCars, UpdateCar, DeleteCar, AddCar } from "../redux/actions/cars.action";
import { CarState } from "../redux/states/car.state";
import { Car } from "../models/car.model";

@Injectable({
  providedIn: "root"
})
export class CarsService {
  private readonly BASE_URL = "http://localhost:3000/";

  constructor(private http: HttpClient, private store: Store<CarState>) {}

  public preloadCars(): Observable<Car[]> {
    return <Observable<Car[]>><Observable<unknown>>
      this.http.get(this.BASE_URL + "cars");
  }

  public async loadCars(): Promise<any> {
    const cars: Car[] = await this.preloadCars().toPromise();

    this.store.dispatch(new LoadCars(cars));
  }

  public async addCar(car: Car): Promise<any> {
    const carSaved: Car = await <Car><unknown>this.http
      .post(this.BASE_URL + "cars", car).toPromise();

    this.store.dispatch(new AddCar(carSaved));
  }

  public async deleteCar(car: Car): Promise<any> {
    await this.http.delete(this.BASE_URL + "cars/" + car.id).toPromise();

    this.store.dispatch(new DeleteCar(car));
  }

  public async updateCar(car: Car): Promise<any> {
    const updatedCar = await <Car><unknown>
      this.http.put(this.BASE_URL + "cars/" + car.id, car).toPromise();

    this.store.dispatch(new UpdateCar(updatedCar));
  }
}
