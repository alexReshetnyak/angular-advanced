import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {Car} from '../car.model'
import {AppState} from '../redux/app.state'
import {DeleteCar} from '../redux/cars.action'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car

  constructor(private store: Store<AppState>) {}

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car))
  }

  onBuy() {
    this.car.isSold = true
  }

}
