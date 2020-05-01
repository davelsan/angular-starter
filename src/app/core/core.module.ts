import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }                 from '@angular/common';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
  ],
  exports: [ ],
})
export class CoreModule {

  // Prevent re-import of CoreModule
  // Check Angular docs for more information
  // https://angular.io/guide/singleton-services
  constructor (@Optional() @SkipSelf() coreModule: CoreModule) {

    if (coreModule) {
      throw new Error(
        'CoreModule has already been loaded. ' +
        'Import CoreModule modules in AppModule only.'
      );
    }
  }
}
