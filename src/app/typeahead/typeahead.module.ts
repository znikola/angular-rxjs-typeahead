import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TypeaheadComponent } from './component/typeahead.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [TypeaheadComponent],
  exports: [TypeaheadComponent],
})
export class TypeaheadModule {}
