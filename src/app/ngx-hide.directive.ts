import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appNgxHide]'
})
export class NgxHideDirective implements OnChanges{

  @Input () appNgxHide: boolean;
  constructor(private el: ElementRef) {
    this.el.nativeElement.display = 'block';
  }

  getDisplay(): string {
    return this.appNgxHide ? 'none' : 'block';
}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appNgxHide &&
      changes.appNgxHide.currentValue &&
      changes.appNgxHide.currentValue !==
      changes.appNgxHide.previousValue) {
      this.el.nativeElement.display = this.getDisplay();
  }
}
}
