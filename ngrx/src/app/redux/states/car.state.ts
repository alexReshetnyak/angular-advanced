import { Car } from '../../models/car.model';

export interface CarState {
  carPage: {
    cars: Car[]
  };
}
