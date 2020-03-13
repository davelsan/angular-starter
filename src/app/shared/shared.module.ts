/* CORE */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* COMPONENTS */
import { SvgIconComponent } from './svg-icon/svg-icon.component';


@NgModule({
  declarations: [
    SvgIconComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    SvgIconComponent,
  ]
})
export class SharedModule { }
