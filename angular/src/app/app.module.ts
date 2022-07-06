import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CustomSortPipe } from './custom-sort.pipe'
import { RepeaterComponent } from './repeater/repeater.component'

@NgModule({
  declarations: [AppComponent, CustomSortPipe, RepeaterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
