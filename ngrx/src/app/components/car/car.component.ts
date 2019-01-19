import { Component, Input } from "@angular/core";

import { Car } from "src/app/models/car.model";
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent {
  @Input() car: Car;

  constructor(
    private carService: CarsService
  ) {}

  onDelete() {
    this.carService.deleteCar(this.car);
  }

  onBuy() {
    this.car.isSold = true;

    this.carService.updateCar(this.car);
  }
}
