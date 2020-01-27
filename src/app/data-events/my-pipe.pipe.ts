import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value.length < 5){
      return value
    } else {
      return value.substring(0,4)+"...";
    }
  }

}
