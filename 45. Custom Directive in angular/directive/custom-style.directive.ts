import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color = 'red';
    elem.nativeElement.style.backgroundColor = 'skyblue';
    // elem.nativeElement.style.display = 'none';
  }

}
