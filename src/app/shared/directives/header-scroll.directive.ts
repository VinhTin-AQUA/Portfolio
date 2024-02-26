import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]',
  standalone: true
})
export class HeaderScrollDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const element = this.el.nativeElement;

    if (scrollPosition >= 620) {
      this.renderer.addClass(element, 'active');
    } else {
      this.renderer.removeClass(element, 'active');
    }
  }


}
