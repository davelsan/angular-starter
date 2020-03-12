/* CORE */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* MODULES */
import { InlineSVGModule } from 'ng-inline-svg';

/* COMPONENTS */
import { AppSvgComponent } from './app-svg/app-svg.component';


@NgModule({
  declarations: [AppSvgComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  exports: [
    AppSvgComponent
  ]
})
export class SharedModule { }
