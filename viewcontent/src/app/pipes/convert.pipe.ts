import { Pipe, PipeTransform } from '@angular/core';

// ! InPure pipe

@Pipe({
  name: 'convert',
  pure: false // * method transform  will be called every time when ChangeDetection is begin
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('ConvertPipe');

    return value;
  }

}
