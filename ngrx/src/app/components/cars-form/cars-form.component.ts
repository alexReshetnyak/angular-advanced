import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

import { Car } from "src/app/models/car.model";
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: "app-cars-form",
  templateUrl: "./cars-form.component.html",
  styleUrls: ["./cars-form.component.css"]
})
export class CarsFormComponent implements OnInit {
  public carName = "";
  public carModel = "";

  constructor(
    private carsService: CarsService
  ) {}

  ngOnInit() {}

  onAdd() {
    if (this.carModel === "" || this.carName === "") {
      return;
    }

    const date = moment().format("DD.MM.YY");
    const car = new Car(this.carName, date, this.carModel);

    this.carsService.addCar(car);

    this.carModel = "";
    this.carName = "";
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
