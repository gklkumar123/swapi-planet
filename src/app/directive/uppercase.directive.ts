import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uppercase]'
})

export class UppercaseDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.textTransform = "uppercase";
   }

}
