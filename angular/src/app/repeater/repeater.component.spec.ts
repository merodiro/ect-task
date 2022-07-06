import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { RepeaterComponent } from './repeater.component'

@Component({
  template: `<repeater [option]="data">
    <ng-template let-item>
      <div class="item">{{ item.name }}</div>
    </ng-template>
  </repeater>`,
})
class TestHostComponent {
  data = [{ name: 'A' }, { name: 'B' }, { name: 'C' }]
}

describe('RepeaterComponent', () => {
  let component: TestHostComponent
  let fixture: ComponentFixture<TestHostComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepeaterComponent, TestHostComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    const items = fixture.debugElement
      .queryAll(By.css('.item'))
      .map((item) => item.nativeElement.innerText)

    expect(component).toBeTruthy()

    expect(items.length).toBe(3)

    expect(items).toEqual(['A', 'B', 'C'])
  })
})
