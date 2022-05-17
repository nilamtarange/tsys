import { Directive } from '@angular/core';
import { BaseConfigService } from './base-config.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private base:BaseConfigService) {
    let bases=this.base
    console.log(bases);
    console.log( this.base.url);
   }

}
