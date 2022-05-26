import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() color: string;
  @Input() width: string;
  constructor(
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.highlight();
  }

  highlight() {
    this.elRef.nativeElement.style.backgroundColor = this.color ? this.color : 'yellow';
    this.elRef.nativeElement.style.backgroundColor = this.width ? this.width : 'auto';
  }

}
