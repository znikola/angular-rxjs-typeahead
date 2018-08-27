import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypeaheadModule } from './typeahead/typeahead.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TypeaheadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
