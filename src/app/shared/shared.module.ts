import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { QuillModule } from 'ngx-quill'

import { LoaderComponent } from './components/loader/loader.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    LoaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
    QuillModule.forRoot()
  ],
  exports: [
    CommonModule,
    LoaderComponent,
    ReactiveFormsModule,
    FormsModule,
    DpDatePickerModule,
    QuillModule,
    SearchComponent
  ],
  providers: []
})
export class SharedModule { }
