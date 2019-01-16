import { Component } from "@angular/core";
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, of, combineLatest, asyncScheduler } from "rxjs";
import { observeOn } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public subscribersValues: number[][] = [];
  public counter = 0;
  public subscriberIndex = 0;

  // public subject = new Subject<number>();
  //  public subject = new BehaviorSubject<number>(0);
  // public subject = new ReplaySubject<number>(5, 3000); // * Save last 5 values in last 3 seconds
  public subject = new AsyncSubject<number>(); // * return values only if complete

  constructor() {
    const o1 = of(1, 2).pipe(
      observeOn(asyncScheduler) // * Create async schedule (timetable)
    );
    const o2 = of(3);

    const o = combineLatest(o1, o2);

    o.subscribe(
      ([val1, val2]) => console.log(val1, val2)
    );
  }

  emitValue() {
    this.counter++;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);

    this.subject.subscribe(value => subscriberValues.push(value));
  }
}
