import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  isOpen = false;
  dropdownMenu: HTMLElement | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.dropdownMenu = this.elementRef.nativeElement.nextElementSibling;
  }

  @HostListener('click') toggleDropdown() {
    if (!this.dropdownMenu) return;

    if (this.isOpen)
      this.renderer.removeClass(this.dropdownMenu, 'show');
    else
      this.renderer.addClass(this.dropdownMenu, 'show');

    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event.target']) onClickPage(targetElement: HTMLElement) {
    const isButtonClicked = this.elementRef.nativeElement.contains(targetElement);

    if (isButtonClicked)
      return;

    if (this.isOpen)
      this.renderer.removeClass(this.dropdownMenu, 'show');

    this.isOpen = false;
  }
}
