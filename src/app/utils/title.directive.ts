import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective implements OnInit {

  @Input('color') color: string;
  @Input('width') width: string;
  @Input('size') size: string;

  constructor(
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.highlight();
  }

  highlight() {
    this.elRef.nativeElement.style.backgroundColor = this.color ? this.color : '';
    this.elRef.nativeElement.style.width = this.width ? this.width : 'auto';
    this.elRef.nativeElement.style.fontSize = this.size ? this.size : '40px';
  }

}
