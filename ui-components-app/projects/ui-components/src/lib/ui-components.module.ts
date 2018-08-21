import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyInputComponent } from './my-input/my-input.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MySelectComponent } from './my-select/my-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MyInputComponent, MyButtonComponent, MySelectComponent],
  exports: [MyInputComponent, MyButtonComponent, MySelectComponent]
})
export class UiComponentsModule { }
