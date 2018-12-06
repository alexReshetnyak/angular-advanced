import { Component, NgZone, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';
  data: any = {};

  constructor(
    zone: NgZone,
    app: ApplicationRef,
    private cdr: ChangeDetectorRef
  ) {
    zone.runOutsideAngular(() => {
      console.log('Run something outside angular zone');
    });

    // * Run Change Detection for whole application
    app.tick();

    setTimeout(() => {
      // const newData = { ... this.data };
      // newData.name = 'SAM';
      // this.data = newData;

      this.data.name = 'VASYA';


      this.title = 'Another TITLE';
      // this.cdr.detectChanges(); // * Run change detection for component and it children
      // this.cdr.markForCheck(); // * Used to mark view as changed and changeDetection will work once
      console.log('TimeOut finish!');
    }, 3000);
  }
}
