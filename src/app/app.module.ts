/* CORE */
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* MODULES */
import { InlineSVGModule } from 'ng-inline-svg';

/* COMPONENTS */
import { AppComponent }    from './app.component';
import { AppSvgComponent } from './app-svg/app-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSvgComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
