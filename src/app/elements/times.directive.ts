import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appTimes')
  set generateLines(times: number){
    this.viewContainerRef.clear();
    for(let i = 0; i < times; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef, {})
    }
  }
}
