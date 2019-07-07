import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 15) {
      value = value.substring(0, 15);
      return value;
    } else {
      return value;
    }




    // if too long
  //  substring to correct length
    // add 3 dots
    // return

    // else return string
  }

}
