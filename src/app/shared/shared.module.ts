import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as c from '.';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [c.HamburgerComponent],
  declarations: [c.HamburgerComponent]
})
export class SharedModule { }
