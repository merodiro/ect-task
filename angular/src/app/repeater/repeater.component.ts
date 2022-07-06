import { Component, ContentChild, Input, TemplateRef } from '@angular/core'

@Component({
  selector: 'repeater',
  template: `
    <div *ngFor="let item of option">
      <ng-container
        *ngIf="childTemplateRef"
        [ngTemplateOutlet]="childTemplateRef"
        [ngTemplateOutletContext]="{ $implicit: item }"
      ></ng-container>
    </div>
  `,
})
export class RepeaterComponent {
  @ContentChild(TemplateRef)
  childTemplateRef!: TemplateRef<any>

  @Input()
  option: any[] = []
}
