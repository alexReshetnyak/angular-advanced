import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";
import { counterReducer } from "./redux/reducers/counter.reducer";
import { carsReducer } from "./redux/reducers/cars.reducer";
import { CarsFormComponent } from "./components/cars-form/cars-form.component";
import { CarComponent } from "./components/car/car.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter: counterReducer, // * Initialization of counterReducer
      carPage: carsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
