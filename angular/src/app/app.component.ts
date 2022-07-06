import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ect-task'

  options = [
    { name: 'cherry', price: 2 },
    { name: 'kiwi', price: 3 },
    { name: 'apple', price: 1 },
    { name: 'cherry', price: 3 },
  ]

  data = [{ name: 'A' }, { name: 'B' }, { name: 'C' }]
}
