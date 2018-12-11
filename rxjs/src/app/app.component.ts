import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscribersValues: number[][] = [];
  counter = 0;
  subject = new Subject<number>();

  emitValue() {
    this.counter++;
    this.subject.next(this.counter);
  }

  subscribe() {
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);
  }
}
