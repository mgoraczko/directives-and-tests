import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[highlitedText]",
    standalone: true
})

export class HighlightedTextDirective {

    @Input() highlightColor: string = 'black';
    @Input() regularColor: string = 'black';

    constructor(private el: ElementRef<HTMLElement>) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.setHighlightColor(this.highlightColor);
      }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.setHighlightColor(this.regularColor);
    }

    private setHighlightColor(color: string): void {
        this.el.nativeElement.style.textShadow = "2px 2px " + color;
    }
}