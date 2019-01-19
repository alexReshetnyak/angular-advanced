
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";
import { counterReducer } from "./redux/reducers/counter.reducer";
import { carsReducer } from "./redux/reducers/cars.reducer";
import { CarsFormComponent } from "./components/cars-form/cars-form.component";
import { CarComponent } from "./components/car/car.component";
import { CarsEffect } from './redux/effects/car.effect';
import { environment } from 'src/environments/environment.prod';

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
    EffectsModule.forRoot([CarsEffect]),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: AppComponent }
    ]),
    StoreModule.forRoot({
      counter: counterReducer, // * Initialization of counterReducer
      carPage: carsReducer
    }),
    // StoreRouterConnectingModule,
    // environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
