import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

/* MOCKS */
import { MockSvgDefsComponent } from './mocks/svg-defs.mocks';
import { MockSvgIconComponent } from './mocks/svg-icon.mock';
import { MockToolbarComponent } from './mocks/app-toolbar.mock';


@NgModule({
  declarations: [
    MockSvgDefsComponent,
    MockSvgIconComponent,
    MockToolbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MockSvgDefsComponent,
    MockSvgIconComponent,
    MockToolbarComponent,
  ],
})
export class CoreModule { }
