import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // * Skip for @Input properties change detection if link to object the same
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() data: any;
  private oldName: string;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[CHILD] Change detection start!', changes);
  }

  ngDoCheck(): void {
    console.log('Data:', this.data);
    // tslint:disable-next-line:no-unused-expression
    (this.oldName !== this.data.name) && this.cdr.markForCheck();
  }

}
