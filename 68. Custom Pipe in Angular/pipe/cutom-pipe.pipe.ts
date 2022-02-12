import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutomPipe'
})
export class CutomPipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender === 'Male'){
      return "Mr. "+value;
    } else {
      return "Miss. "+value;
    }
  }

}
