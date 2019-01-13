import { Component } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

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
  public subject = new BehaviorSubject<number>(0);

  emitValue() {
    this.counter++;
    this.subject.next(this.counter);
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);

    this.subject.subscribe(value => subscriberValues.push(value));
  }
}
