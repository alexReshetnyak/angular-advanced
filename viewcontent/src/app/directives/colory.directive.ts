import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'appColory'
})
export class ColoryDirective {

  @HostBinding('style.color') myColor = 'red';

  constructor() { }

  changeColor(color: string) {
    this.myColor = color;
  }

}
