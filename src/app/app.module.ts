/* CORE */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

/* MODULES */
import { SharedModule } from './shared/shared.module';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    // core & shared
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
