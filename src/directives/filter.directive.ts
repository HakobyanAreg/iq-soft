import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFilter]',
})
export class FilterDirective {
  @Input('appFilter') filterKey: string = '';
  @Input() data: any;
  @Input() fullArray: any[] | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.data && this.filterKey) {
      this.filterData();
    }
  }

  private filterData() {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', '');

    if (this.data[this.filterKey].every((item: any) => item.status === true)) {
      this.data[this.filterKey].forEach((item: any) => {
        const element = this.renderer.createElement('div');
        this.renderer.setProperty(element, 'innerHTML', item.name);
        this.renderer.appendChild(this.elementRef.nativeElement, element);
      });
    }
  }
}
