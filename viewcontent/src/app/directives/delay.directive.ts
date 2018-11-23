import { Directive, ViewContainerRef, TemplateRef, ElementRef, OnInit, Input } from '@angular/core';

// ! Structure directive

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {
  @Input() appDelay: number;

  constructor(private view: ViewContainerRef, private template: TemplateRef<ElementRef>) { }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.appDelay);
  }
}
